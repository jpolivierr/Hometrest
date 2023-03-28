package com.hometrest.servlet;


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

@WebServlet(urlPatterns = "/signup")
@MultipartConfig
public class SignupServlet extends HttpServlet{

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
    throws ServletException, IOException{

     
    resp.setHeader("Access-Control-Allow-Origin", "*");

    resp.setContentType("text/html");

    HttpSession session = req.getSession(false);

    // resp.setStatus(200);
    
    PrintWriter printWriter = resp.getWriter();
    printWriter.print("<html>");
    printWriter.print("<body>");
    printWriter.print("<h1>Sign up page</h1>");
    printWriter.print("Session Id: " + session.getAttribute(ValidSessionKeys.SESSION_ID) + "<br>");
    printWriter.print("start time: " + session.getAttribute(ValidSessionKeys.SESSION_START_TIME) + "<br>");
    printWriter.print("last access: " + session.getAttribute(ValidSessionKeys.SESSION_LAST_ACCESS));
    printWriter.print("</body>");
    printWriter.print("</html>");
    printWriter.close();
    }
}
