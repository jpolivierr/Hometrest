package com.hometrest;

 import com.hometrest.servlet.*;
import com.hometrest.ErrorHandler.ErrorServlet;
import com.hometrest.filter.*;


public class Main {

    public static void name(String[] args) {
         new LoginServlet();
         new SignupServlet();
         new ErrorServlet();
        //new RequestFilter();
         new SessionFilter();
         

    }
    
}
