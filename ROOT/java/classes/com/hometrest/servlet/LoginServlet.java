package com.hometrest.servlet;

import java.io.IOException;

import com.google.gson.Gson;
import com.hometrest.SessionManagement.SessionManagement;
import com.hometrest.database.DbConnect;
import com.hometrest.database.ValidateUser;
import com.hometrest.formSubmissions.LoginForm;
import com.hometrest.handlers.JsonHttpResponse;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;



@WebServlet(urlPatterns = "/secure/login")
@MultipartConfig
public class LoginServlet extends HttpServlet{

    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
    throws ServletException, IOException{


        String clientResponse = request.getParameter("formData");

        Gson gson = new Gson();

        var userInput = gson.fromJson(clientResponse, LoginForm.class);

        var result = userInput.validate();

        if(result.isEmpty()){

            var dbConnect = DbConnect.getDbConnect();

            var connection = dbConnect.connect();

            ValidateUser validateUser = new ValidateUser();

            var userIsAuthenticate = validateUser.init(response, connection, userInput);

            if(userIsAuthenticate){

                System.out.println("user authenticated...");

                var newSession = SessionManagement.create(request, response);
                newSession.setAttribute("email", userInput.getEmail()); 

                JsonHttpResponse.send(response, 200,"user authenticated", result);
            }

        }else{
            JsonHttpResponse.send(response, 409,"Error", result);
        }


    }

}