package com.hometrest.api;

import java.io.IOException;
import java.sql.Connection;
import java.util.HashMap;

import com.hometrest.JsonHttpResponse;
import com.hometrest.database.DbConnect;
import com.hometrest.database.FetchAccount;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@WebServlet(urlPatterns = "/api/get_account")
@MultipartConfig
public class GetAccount extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
    throws ServletException, IOException{


            HttpSession session = request.getSession(false);

            String email = (String) session.getAttribute("email");

            if(email != null){

                DbConnect dbConnect = DbConnect.getDbConnect();

                Connection connection = dbConnect.connect();

                FetchAccount fetchAccount = new FetchAccount();

                HashMap<String,String> account = fetchAccount.init(connection, email);

                if(account.isEmpty()){

                HashMap<String,String> notFound = new HashMap<>();

                notFound.put("serverError", "User not found");

                JsonHttpResponse.send(response, 409,"User not found", notFound);

                  return ;
                }

                JsonHttpResponse.send(response, 200,"Success", account);

                return;

            }

            HashMap<String,String> notFound = new HashMap<>();

            notFound.put("serverError", "User not found");

            JsonHttpResponse.send(response, 409,"User not found", notFound);
        
    }

   
}
