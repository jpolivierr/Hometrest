package com.appvenir.hometrest.SessionManagement;

import java.util.UUID;

import org.springframework.stereotype.Component;

import com.appvenir.hometrest.Exceptions.SessionExistException;
import com.appvenir.hometrest.sessionConfig.MySesionConfig;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@Component
public class SessionManagement {


    private HttpServletRequest request;

    
    public SessionManagement(HttpServletRequest request, HttpServletResponse response, HttpSession session){

        this.request = request;

    }

    public Boolean Valid(){

        String sessionAuthId = (String) request.getSession().getAttribute("SESSION_AUTH_ID");
        String cookieAuthId = getCookie("SESSION_AUTH_ID");
        
        if(sessionAuthId == null || cookieAuthId == null) return false;

        if(sessionAuthId.equals(cookieAuthId)) return true;

        return false;

    }

    public void create(String email, HttpSession session, HttpServletResponse response){
       
         String cookieValue = (String) session.getAttribute(MySesionConfig.COOKIE_VALUE);

         String emailFound = (String) session.getAttribute(MySesionConfig.EMAIL);

         if(emailFound != null || cookieValue != null){

            throw new SessionExistException();

         }
     

            String token = UUID.randomUUID().toString();

            Cookie cookie = new Cookie(MySesionConfig.USER_AUTH_TOKEN, token);
            cookie.setHttpOnly(false);
            cookie.setSecure(false);
            cookie.setPath("/");
            response.addCookie(cookie);
      
            session.setAttribute(MySesionConfig.EMAIL, email);
            session.setAttribute(MySesionConfig.COOKIE_VALUE, token);
            session.setAttribute(MySesionConfig.JSESSION_ID, session.getId());
            session.setMaxInactiveInterval(MySesionConfig.MAX_INERVAL);

       

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
