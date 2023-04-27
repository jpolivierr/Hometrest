package com.hometrest;

import jakarta.servlet.http.HttpServletResponse;

public class Redirects {
    
    public static void send(String path, HttpServletResponse response){
        try {
             switch(path){
                case "/login" :
                    response.sendRedirect("/");
                break;
            default :
                return ;

         }
        } catch (Exception e) {
            // TODO: handle exception
        }
       

    }

}
