package com.hometrest;

import com.hometrest.ErrorHandler.ErrorServlet;
import com.hometrest.api.DeleteAccount;
import com.hometrest.api.GetAccount;
import com.hometrest.api.LikePropsApi;
import com.hometrest.api.ListSearchApi;
import com.hometrest.api.LoginApi;
import com.hometrest.api.LogoutApi;
import com.hometrest.api.SignupApi;
import com.hometrest.api.UnlikePropsApi;
import com.hometrest.api.UpdateAccount;
import com.hometrest.filter.ApisFilter;
import com.hometrest.filter.EndPointFilter;
import com.hometrest.filter.SecureFilter;
import com.hometrest.servlet.ListingsServlet;
import com.hometrest.servlet.LoginServlet;
import com.hometrest.servlet.SignupServlet;


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
         new GetAccount();
         new UpdateAccount();
         new DeleteAccount();
         new LikePropsApi();
         new UnlikePropsApi();
        
    }
    
}
