package com.hometrest.api;

import java.io.IOException;
import java.sql.Connection;
import java.util.HashMap;

import com.hometrest.JsonHttpResponse;
import com.hometrest.database.DbConnect;
import com.hometrest.database.Db_DeleteAccount;
import com.hometrest.database.Db_FetchAccount;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@WebServlet(urlPatterns = "/api/delete_account")
@MultipartConfig
public class DeleteAccount extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
    throws ServletException, IOException{


            HttpSession session = request.getSession(false);

            String email = (String) session.getAttribute("email");

            if(email != null){

                DbConnect dbConnect = DbConnect.getDbConnect();

                Connection connection = dbConnect.connect();

                Db_DeleteAccount deleteAccount = new Db_DeleteAccount();

                Boolean account = deleteAccount.init(connection, email);

                if(!account){

                HashMap<String,String> notFound = new HashMap<>();

                notFound.put("serverError", "User not found");

                JsonHttpResponse.send(response, 409,"User not found", notFound);

                  return ;
                }

                session.invalidate();

                session = null;

                JsonHttpResponse.send(response, 200,"Account Deleted", null);

                return;

            }

            HashMap<String,String> notFound = new HashMap<>();

            notFound.put("serverError", "User not found");

            JsonHttpResponse.send(response, 409,"User not found", notFound);
        
    }

   
}
