package com.hometrest.api;

import java.io.IOException;
// import java.io.PrintWriter;
import java.util.HashMap;

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

                newSession.setAttribute("token", MySessionManagement.generateUUID(newSession));

                newSession.setAttribute("email", signupForm.getEmail()); 

                response.setHeader(MySessionManagement.getTokenKey(), MySessionManagement.generateUUID(newSession));

                response.setHeader("Access-Control-Expose-Headers", MySessionManagement.getTokenKey());

                JsonHttpResponse.send(response, 200,"user created", account);

                return;

        }else{

            JsonHttpResponse.send(response, 409,"Something went wrong", result);
            
        }

        

    }
    
}
