package com.hometrest;

 import com.hometrest.servlet.*;
import com.hometrest.ErrorHandler.ErrorServlet;
// import com.hometrest.api.ApiEndPoint;
import com.hometrest.filter.*;
import com.hometrest.makeRequest.MakeRequest;



public class Main {

    public static void main(String[] args) {
         new LoginServlet();
         new SignupServlet();
         new ErrorServlet();
        //  new EndPointFilter();
         new SearchServlet();
        // new ApiEndPoint();
        var rs = MakeRequest.get("https://jsonplaceholder.typicode.com/posts/1");
        System.out.println(rs);
    
        
    }
    
}
