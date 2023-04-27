package com.hometrest.api;

import java.io.IOException;
import java.io.PrintWriter;

import com.hometrest.JsonHttpResponse;
import com.hometrest.MySessionManagement;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@WebServlet(urlPatterns = "/secure/logout")
@MultipartConfig
public class LogoutApi extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
    throws ServletException, IOException{

        // PrintWriter out = response.getWriter();

        HttpSession session = request.getSession(false);

        if(session == null){
            JsonHttpResponse.send(response, 409,"No sessions", null);
            // response.sendRedirect("/");
            return;
        }

        if(session != null){

            String sessionExist = MySessionManagement.validateSessionId(session,request);

            if(sessionExist != null){

                session.invalidate();

            }

            session = null;

            response.sendRedirect("/");

        }


     }
    
    
}
