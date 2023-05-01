package com.hometrest;

 import com.hometrest.servlet.*;
import com.hometrest.ErrorHandler.ErrorServlet;
import com.hometrest.api.LoginApi;
import com.hometrest.api.LogoutApi;
import com.hometrest.api.SignupApi;
import com.hometrest.api.DeleteUserAccount;
import com.hometrest.api.GetAccount;
import com.hometrest.api.ListSearchApi;
// import com.hometrest.api.ApiEndPoint;
import com.hometrest.filter.*;


public class Main {

    public static void main(String[] args) {
         new ApisFilter();
         new SecureFilter();
         new EndPointFilter();
         new ListingsServlet();
         new LoginServlet();
         new SignupServlet();
         new ErrorServlet();
         new ListSearchApi();
         new SignupApi();
         new LoginApi();
         new LogoutApi();
         new DeleteUserAccount();
         new GetAccount();
        
    }
    
}
