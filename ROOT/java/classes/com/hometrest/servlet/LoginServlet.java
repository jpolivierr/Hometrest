package com.hometrest.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import com.hometrest.MySessionManagement;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;



@WebServlet(urlPatterns = "/login")
@MultipartConfig
public class LoginServlet extends HttpServlet{

    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
    throws ServletException, IOException{

    PrintWriter out = response.getWriter();

    HttpSession session = request.getSession(false);

    String sessionId = MySessionManagement.validateSessionId(session, request);

    if(session != null && sessionId != null){

        out.print("Session Exist.");

        response.sendRedirect("/");

    }else{

        out.print("Session does not exist.");

         RequestDispatcher dispatcher = request.getRequestDispatcher("index.html");

         dispatcher.include(request, response);

    }
 

   

        
    }

}