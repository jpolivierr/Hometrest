package com.hometrest.SessionCookies;

import java.security.SecureRandom;
import java.util.Base64;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

public class SessionCookie {


    public void set(HttpServletResponse response){

        SecureRandom random = new SecureRandom();

        byte[] bytes = new byte[16];

        random.nextBytes(bytes);

        String sessionId = Base64.getUrlEncoder().encodeToString(bytes);

        Cookie sessionCookie = new Cookie("SESSIONID", sessionId);

        sessionCookie.setSecure(true);

        sessionCookie.setHttpOnly(true);

        sessionCookie.setMaxAge(3600);
        
        response.addCookie(sessionCookie);
    }
    
}
