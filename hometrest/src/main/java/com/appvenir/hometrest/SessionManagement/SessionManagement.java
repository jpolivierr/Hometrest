package com.appvenir.hometrest.SessionManagement;

import java.util.UUID;

import org.springframework.security.core.session.SessionIdChangedEvent;
import org.springframework.stereotype.Component;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@Component
public class SessionManagement {

    private final static String SESSION_AUTH_ID = "SESSION_AUTH_ID";
    private final static String TOKEN_KEY = "AuthorizationToken";

    private HttpServletRequest request;
    private HttpServletResponse response;
    private HttpSession session;
    
    public SessionManagement(HttpServletRequest request, HttpServletResponse response, HttpSession session){

        this.request = request;
        this.response = response;
        this.session = session;

    }

    public Boolean Valid(){

        String sessionAuthId = (String) request.getSession().getAttribute("SESSION_AUTH_ID");
        String cookieAuthId = getCookie("SESSION_AUTH_ID");

        System.out.println(sessionAuthId);
        System.out.println(cookieAuthId);
        
        if(sessionAuthId == null || cookieAuthId == null) return false;

        if(sessionAuthId.equals(cookieAuthId)) return true;

        return false;

    }

    public void create(String email){
       
            String TOKEN_VALUE = UUID.randomUUID().toString();
            String SESSION_AUTH_ID_VALUE = UUID.randomUUID().toString();

            request.getSession().setAttribute(SESSION_AUTH_ID, SESSION_AUTH_ID_VALUE);
            request.getSession().setAttribute("email", email);
            request.getSession().setMaxInactiveInterval(20);

            Cookie authCookie = new Cookie(TOKEN_KEY, TOKEN_VALUE);
                              authCookie.setHttpOnly(false);
                              authCookie.setSecure(true);

            Cookie sessionAuthId = new Cookie(SESSION_AUTH_ID, SESSION_AUTH_ID_VALUE);
                                sessionAuthId.setHttpOnly(true);
                                sessionAuthId.setSecure(false);

            response.addCookie(authCookie);
            response.addCookie(sessionAuthId);

            System.out.println("session created...");

    }

    public String getAttribute(String attributeName){

        String sessionAuthId = (String) this.request.getSession().getAttribute(attributeName);

        String result = sessionAuthId != null ? sessionAuthId : null;

        return result;

    }

    public String getCookie(String cookieName){
        Cookie[] cookies = this.request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals(cookieName)) {
                    return cookie.getValue();
                }
            }
        }
        return null;
    }

    public void close(){

        request.getSession().invalidate();

    }

}
