package com.hometrest;

 import com.hometrest.servlet.*;
import com.hometrest.ErrorHandler.ErrorServlet;
import com.hometrest.api.LoginApi;
import com.hometrest.api.LogoutApi;
import com.hometrest.api.ListSearchApi;
// import com.hometrest.api.ApiEndPoint;
import com.hometrest.filter.*;


public class Main {

    public static void main(String[] args) {
         new EndPointFilter();
         new ListingsServlet();
         new LoginServlet();
         new SignupServlet();
         new ErrorServlet();
         new ListSearchApi();
         new LoginApi();
         new LogoutApi();
        // new ApiEndPoint();
        // String url = "https://realty-in-us.p.rapidapi.com/properties/v3/list";
        // String data = "{\"limit\": 3,\"postal_code\":\"90004\"}";
        
        // var rs = MakeRequest.post(url, data);
        // System.out.println(rs);
    
        
    }
    
}
