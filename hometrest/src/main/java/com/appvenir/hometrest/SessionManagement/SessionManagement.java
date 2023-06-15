package com.appvenir.hometrest.SessionManagement;

import java.util.UUID;

import org.springframework.security.core.session.SessionIdChangedEvent;
import org.springframework.stereotype.Component;

import com.appvenir.hometrest.Exceptions.SessionExistException;
import com.appvenir.hometrest.api.user.User;
import com.appvenir.hometrest.sessionConfig.MySesionConfig;

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
        
        if(sessionAuthId == null || cookieAuthId == null) return false;

        if(sessionAuthId.equals(cookieAuthId)) return true;

        return false;

    }

    public void create(String email, HttpSession session, HttpServletResponse response){
       
         String emailFoud = (String) session.getAttribute(MySesionConfig.EMAIL);

         if(emailFoud == null){

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

         }else{

            throw new SessionExistException();

         }

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
