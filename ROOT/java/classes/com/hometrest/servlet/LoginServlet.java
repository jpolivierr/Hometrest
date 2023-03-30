package com.hometrest.servlet;

import java.io.IOException;

import com.hometrest.handlers.HttpResponse;

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

    HttpSession session = req.getSession(false);
    
    session.setAttribute("user_authenticate", "true");
    var isAuth = session.getAttribute("user_authenticate");

    if(isAuth != null){
        var jsonResonse = new HttpResponse();
        jsonResonse.send(resp, 200, "success", null);
    }

    
    
    

    // resp.setStatus(200);
    
    // PrintWriter printWriter = resp.getWriter();
    // printWriter.print("<html>");
    // printWriter.print("<body>");
    // printWriter.print("<h1>This is login page</h1>");
    // printWriter.print("Session Id: " + session.getAttribute(ValidSessionKeys.SESSION_ID) + "<br>");
    // printWriter.print("start time: " + session.getAttribute(ValidSessionKeys.SESSION_START_TIME) + "<br>");
    // printWriter.print("last access: " + session.getAttribute(ValidSessionKeys.SESSION_LAST_ACCESS));
    // printWriter.print("</body>");
    // printWriter.print("</html>");
    // printWriter.close();
    }

}