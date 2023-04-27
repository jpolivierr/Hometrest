package com.hometrest.api;

import java.io.IOException;
// import java.io.PrintWriter;
import java.io.PrintWriter;
import java.util.HashMap;

import com.google.gson.Gson;
import com.hometrest.JsonHttpResponse;
import com.hometrest.MySessionManagement;
import com.hometrest.database.DbConnect;
import com.hometrest.database.ValidateUser;
import com.hometrest.formSubmissions.LoginForm;

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

    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
    throws ServletException, IOException{

        PrintWriter out = response.getWriter();

        // Gson gson = new Gson();

        // String clientResponse = request.getParameter("formData");

        // LoginForm userInput = gson.fromJson(clientResponse, LoginForm.class);

        LoginForm logInForm = new LoginForm();

        logInForm.setEmail("jp@gmail.com");

        logInForm.setPassword("car2naval2");

        HashMap<String, String> validateLoginInput = logInForm.validate();

        if(validateLoginInput.isEmpty()){

            var dbConnect = DbConnect.getDbConnect();

            var connection = dbConnect.connect();

            ValidateUser validateUser = new ValidateUser();

            HashMap<String,String> userIsAuthenticate = validateUser.init(response, connection, logInForm);

            if(userIsAuthenticate.isEmpty()){

                JsonHttpResponse.send(response, 409,"Either the password or email is not valid", null);
            }else{
    
                var newSession = MySessionManagement.create(request, response);
    
                    newSession.setAttribute("email", logInForm.getEmail()); 
    
               JsonHttpResponse.send(response, 200,"user authenticated", userIsAuthenticate);
            }

        }else{

            JsonHttpResponse.send(response, 409,"Error", validateLoginInput);
            
        }


     }
    
}
