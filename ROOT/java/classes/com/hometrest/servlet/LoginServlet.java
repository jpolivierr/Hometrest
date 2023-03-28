package com.hometrest.servlet;

import java.io.IOException;
import java.io.PrintWriter;

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

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
    throws ServletException, IOException{

    resp.setHeader("Access-Control-Allow-Origin", "*");

    resp.setContentType("text/html");

    HttpSession session = req.getSession(true);
    
    // resp.setStatus(200);
    
    PrintWriter printWriter = resp.getWriter();
    printWriter.print("<html>");
    printWriter.print("<body>");
    printWriter.print("<h1>This is login page</h1>");
    printWriter.print(session.getAttribute("time-entered") + "<br>");
    printWriter.print(session.getAttribute("last-access"));
    printWriter.print("</body>");
    printWriter.print("</html>");
    printWriter.close();
    }

}