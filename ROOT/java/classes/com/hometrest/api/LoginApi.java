package com.hometrest.api;

import java.io.IOException;
// import java.io.PrintWriter;

import com.google.gson.Gson;
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
// import jakarta.servlet.http.HttpSession;

@WebServlet(urlPatterns = "/secure/login")
@MultipartConfig

public class LoginApi extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse resp) 
    throws ServletException, IOException{

        var jsonHttpResponse = new JsonHttpResponse();

        String clientResponse = req.getParameter("formData");

        Gson gson = new Gson();

        var userInput = gson.fromJson(clientResponse, LoginForm.class);

        var result = userInput.validate();

        if(result.isEmpty()){
            var dbConnect = DbConnect.getDbConnect();
            var connection = dbConnect.connect();
            var getUser = new ValidateUser();
            getUser.init(resp, connection, userInput);
        }else{
            jsonHttpResponse.send(resp, 409,"aerror", result);
        }

        

    }
    
}
