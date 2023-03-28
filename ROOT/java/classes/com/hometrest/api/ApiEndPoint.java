package com.hometrest.api;

import java.io.IOException;
import java.io.PrintWriter;

import com.hometrest.filter.ValidSessionKeys;

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

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
    throws ServletException, IOException{

    resp.setHeader("Access-Control-Allow-Origin", "*");

    resp.setContentType("text/html");

    HttpSession session = req.getSession(false);

    if(session.getAttribute("user_authenticate") == null){

        resp.sendRedirect("/login");

    }

    
    // resp.setStatus(200);
    
    PrintWriter printWriter = resp.getWriter();
    printWriter.print("<html>");
    printWriter.print("<body>");
    printWriter.print("<h1>API Page</h1>");
    printWriter.print("</body>");
    printWriter.print("</html>");
    printWriter.close();
    }

}
