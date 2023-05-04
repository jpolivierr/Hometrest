package com.hometrest.api;

import java.io.IOException;
import java.sql.Connection;
import java.util.HashMap;

import com.hometrest.JsonHttpResponse;
import com.hometrest.MySessionManagement;
import com.hometrest.database.DbConnect;
import com.hometrest.database.DeleteAccount;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet; 
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@WebServlet(urlPatterns = "/api/delete_account")
@MultipartConfig
public class DeleteUserAccount extends HttpServlet{

    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
    throws ServletException, IOException{


            HttpSession session = request.getSession(false);
            String sessionExist = MySessionManagement.validateSessionId(session,request);

            String email = (String) session.getAttribute("email");

            if(email != null && sessionExist != null){

                DbConnect dbConnect = DbConnect.getDbConnect();

                Connection connection = dbConnect.connect();

                DeleteAccount deleteAccount = new DeleteAccount();

                Boolean account = deleteAccount.init(connection, email);

                if(!account){

                HashMap<String,String> notFound = new HashMap<>();

                notFound.put("serverError", "User not found");

                JsonHttpResponse.send(response, 409,"User not found", notFound);

                  return ;
                }

                session.invalidate();
                
                session = null;

                response.sendRedirect("/");

                return;

            }

            HashMap<String,String> notFound = new HashMap<>();

            notFound.put("serverError", "Something went wrong");

            JsonHttpResponse.send(response, 409,"Something went wrong", notFound);
        
    }
    
}
