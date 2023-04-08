package com.hometrest.api;

import java.io.IOException;
// import java.io.PrintWriter;

import com.google.gson.Gson;
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

        var form = gson.fromJson(clientResponse, LoginForm.class);
        var result = form.validate();

        if(result.isEmpty()){
            jsonHttpResponse.send(resp, 200,"api login success", null);
        }else{
            jsonHttpResponse.send(resp, 409,"aerror", result);
        }

        

    }
    
}
