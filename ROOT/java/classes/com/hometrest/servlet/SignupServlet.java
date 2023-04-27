package com.hometrest.servlet;


import java.io.IOException;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = "/signup")
@MultipartConfig
public class SignupServlet extends HttpServlet{

    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
    throws ServletException, IOException{
        // out.print("Session does not exist.");

         RequestDispatcher dispatcher = request.getRequestDispatcher("index.html");

         dispatcher.include(request, response);
        
    }
}
