package com.hometrest;

 import com.hometrest.servlet.*;
import com.hometrest.ErrorHandler.ErrorServlet;
import com.hometrest.api.ApiEndPoint;
import com.hometrest.api.LoginApi;
import com.hometrest.api.SignupApi;
import com.hometrest.database.DbConnect;
import com.hometrest.filter.*;



public class Main {

    public static void main(String[] args) {
         new LoginServlet();
         new SignupServlet();
         new ErrorServlet();
        //new RequestFilter();
         new SessionFilter();
         new ApiEndPoint();
         new LoginApi();
         new SignupApi();
         var dbConnect = DbConnect.getDbConnect();
         dbConnect.connect();
        
    }
    
}
