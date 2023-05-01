package com.hometrest.api;

import java.io.IOException;
// import java.io.PrintWriter;
import java.util.HashMap;
import java.util.UUID;

import com.google.gson.Gson;
import com.hometrest.JsonHttpResponse;
import com.hometrest.MySessionManagement;
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

    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
    throws ServletException, IOException{

        String clientResponse = request.getParameter("formData");
        
        //Validate form
        Gson gson = new Gson();

        SignupForm signupForm = gson.fromJson(clientResponse, SignupForm.class);

        var result = signupForm.validate();

        if(result.isEmpty()){

            var dbConnect = DbConnect.getDbConnect();

            var connection = dbConnect.connect();

            var createUser = new CreateUser();

            Boolean account = createUser.init(connection, signupForm);

            if(!account){

                HashMap<String,String> notFound = new HashMap<>();

                notFound.put("serverError", "Something went wrong");

                JsonHttpResponse.send(response, 409,"Something went wrong", notFound);

                  return ;
             }

                var newSession = MySessionManagement.create(request, response);

                String token = UUID.randomUUID().toString();

                newSession.setAttribute("token", token + "_" + newSession.getMaxInactiveInterval());

                newSession.setAttribute("email", signupForm.getEmail()); 

                response.setHeader("AuthorizationToken", token + "_" + newSession.getMaxInactiveInterval());

                response.setHeader("Access-Control-Expose-Headers", "AuthorizationToken");

                response.sendRedirect("/");

                return;

        }else{

            JsonHttpResponse.send(response, 409,"Something went wrong", result);
            
        }

        

    }
    
}
