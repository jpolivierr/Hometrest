package com.hometrest.api;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@WebServlet(urlPatterns = "/api/*")
@MultipartConfig
public class ApiEndPoint extends HttpServlet{

    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
    throws ServletException, IOException{

    response.setHeader("Access-Control-Allow-Origin", "*");

    response.setContentType("text/html");

    HttpSession session = request.getSession(false);

    PrintWriter out = response.getWriter();
    
        if(session == null){

            HttpSession newSession = request.getSession(true);
            newSession.setMaxInactiveInterval(60);
            
              out.println("created a session");
        }else{
           
            out.println("session already exsit");
        }

    
    // resp.setStatus(200);
    
    PrintWriter printWriter = response.getWriter();
    printWriter.print("<html>");
    printWriter.print("<body>");
    printWriter.print("<h1>API Page</h1>");
    printWriter.print("</body>");
    printWriter.print("</html>");
    printWriter.close();
    }

}
