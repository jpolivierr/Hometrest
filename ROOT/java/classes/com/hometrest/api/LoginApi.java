package com.hometrest.api;

import java.io.IOException;
// import java.io.PrintWriter;
import java.util.HashMap;
import java.util.UUID;

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

    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
    throws ServletException, IOException{

        // PrintWriter out = response.getWriter();

        Gson gson = new Gson();

        String clientResponse = request.getParameter("formData");

        LoginForm logInForm = gson.fromJson(clientResponse, LoginForm.class);

        HashMap<String, String> validateLoginInput = logInForm.validate();

        if(validateLoginInput.isEmpty()){

            var dbConnect = DbConnect.getDbConnect();

            var connection = dbConnect.connect();

            ValidateUser validateUser = new ValidateUser();

            HashMap<String,String> userIsAuthenticate = validateUser.init(connection, logInForm);

            if(userIsAuthenticate.isEmpty()){

                HashMap<String,String> notFound = new HashMap<>();
                notFound.put("serverError", "Either the password or email is not valie");

                JsonHttpResponse.send(response, 409,"Either the password or email is not valid", notFound);

                return;

            }
            
    
                   var newSession = MySessionManagement.create(request, response);

                   String token = UUID.randomUUID().toString();
                    newSession.setAttribute("token", token + "_" + newSession.getMaxInactiveInterval());
                    newSession.setAttribute("email", logInForm.getEmail()); 
                    response.setHeader("AuthorizationToken", token + ";" + newSession.getMaxInactiveInterval());
                    response.setHeader("Access-Control-Expose-Headers", "AuthorizationToken");
                    JsonHttpResponse.send(response, 200,"user authenticated", userIsAuthenticate);
            

        }else{

            JsonHttpResponse.send(response, 409,"error", validateLoginInput);

        }


     }
    
}
