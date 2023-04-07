package com.hometrest.api;

import java.io.IOException;
// import java.io.PrintWriter;

import com.google.gson.Gson;
import com.hometrest.formSubmissions.SignupForm;
import com.hometrest.handlers.JsonHttpResponse;

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

    protected void doPost(HttpServletRequest req, HttpServletResponse resp) 
    throws ServletException, IOException{

        var jsonHttpResponse = new JsonHttpResponse();

        String clientResponse = req.getParameter("formData");
        
        //Validate form
        Gson gson = new Gson();
        var form = gson.fromJson(clientResponse, SignupForm.class);
        var result = form.validate();

        if(result.isEmpty()){
            jsonHttpResponse.send(resp, 200,"api signup success", null);
        }else{
            jsonHttpResponse.send(resp, 405,"Signup error", result);
        }

        

    }
    
}
