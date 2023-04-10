package com.hometrest.servlet;


import java.io.IOException;


import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = "/signup")
@MultipartConfig
public class SignupServlet extends HttpServlet{

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
    throws ServletException, IOException{

     
    resp.setHeader("Access-Control-Allow-Origin", "*");

    resp.setContentType("text/html");


    // resp.setStatus(200);
    
    }
}
