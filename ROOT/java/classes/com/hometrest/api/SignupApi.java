package com.hometrest.api;

import java.io.IOException;
// import java.io.PrintWriter;

import com.google.gson.Gson;
import com.hometrest.JsonHttpResponse;
import com.hometrest.database.CreateUser;
import com.hometrest.database.DbConnect;
import com.hometrest.formSubmissions.SignupForm;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
// import jakarta.servlet.http.HttpSession;

@WebServlet(urlPatterns = "/secure/signup")
@MultipartConfig
public class SignupApi extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse response) 
    throws ServletException, IOException{

        String clientResponse = req.getParameter("formData");
        
        //Validate form
        Gson gson = new Gson();
        var userInput = gson.fromJson(clientResponse, SignupForm.class);
        var result = userInput.validate();

        if(result.isEmpty()){
            var dbConnect = DbConnect.getDbConnect();
            var connection = dbConnect.connect();
            var createUser = new CreateUser();
            createUser.init(response, connection, userInput);
        }else{

            JsonHttpResponse.send(response, 409,"Signup error", result);
            
        }

        

    }
    
}
