package com.hometrest.api.SessionManagement;

import java.util.UUID;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class SessionManagement {

    private final static String SESSION_AUTH_ID = "SESSION_AUTH_ID";
    private final static String TOKEN_KEY = "AuthorizationToken";

    private HttpServletRequest request;
    private HttpServletResponse response;
    
    public SessionManagement(HttpServletRequest request, HttpServletResponse response){

        this.request = request;
        this.response = response;

    }

    public Boolean Valid(){

        String sessionAuthId = (String) request.getSession().getAttribute("SESSION_AUTH_ID");
        String cookieAuthId = getCookie("SESSION_AUTH_ID");
        
        if(sessionAuthId == null || cookieAuthId == null) return false;

        if(sessionAuthId.equals(cookieAuthId)) return true;

        return false;

    }

    public void create(){
       
            String TOKEN_VALUE = UUID.randomUUID().toString();
            String SESSION_AUTH_ID_VALUE = UUID.randomUUID().toString();

            request.getSession().setAttribute(SESSION_AUTH_ID, SESSION_AUTH_ID_VALUE);
            request.getSession().setMaxInactiveInterval(20);

            Cookie authCookie = new Cookie(TOKEN_KEY, TOKEN_VALUE);
                              authCookie.setHttpOnly(false);
                              authCookie.setSecure(true);

            Cookie sessionAuthId = new Cookie(SESSION_AUTH_ID, SESSION_AUTH_ID_VALUE);
                                sessionAuthId.setHttpOnly(true);
                                sessionAuthId.setSecure(true);

            response.addCookie(authCookie);
            response.addCookie(sessionAuthId);

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
