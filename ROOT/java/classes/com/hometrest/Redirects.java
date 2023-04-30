package com.hometrest;

import java.util.HashMap;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class Redirects {
    
    public static boolean send(HttpServletRequest request, HttpServletResponse response){

        boolean result = false;

        try {

            String path = request.getServletPath();

            HashMap<String, String> redirectMap = new HashMap<String, String>();
    
            redirectMap.put(Paths.LOGIN, "/");
            
            redirectMap.put(Paths.SIGNUP, "/");
    
            if(redirectMap.containsKey(path)){
    
               response.sendRedirect(redirectMap.get(path));
    
               result = true;
    
            }
            
        } catch (Exception e) {
           

        }

        return result;

    }

}
