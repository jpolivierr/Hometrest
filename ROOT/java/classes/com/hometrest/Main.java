package com.hometrest;

 import com.hometrest.servlet.*;
 import com.hometrest.filter.*;

public class Main {

    public static void name(String[] args) {
         new LoginServlet();
         new SignupServlet();
         new ClientInfoFilter();
         new RequestFilter();

    }
    
}
