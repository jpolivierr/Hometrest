package com.hometrest.SessionManagement;

import java.sql.Date;
import java.text.SimpleDateFormat;

import com.hometrest.handlers.JsonHttpResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.servlet.http.Cookie;

public class SessionManagement {

        public final static String SESSION_ID = "SESSION_ID";
        public final static String SESSION_START_TIME = "TART_TIME";
        public final static String SESSION_LAST_ACCESS = "LAST_ACCESS";


    public static boolean sessionExist(HttpServletRequest request){

        HttpSession session = request.getSession(false);
        boolean result;

        if(session != null && !session.isNew()){
            result = true;
        }else{
            result = false;
        }

        return result;

    }

    public static boolean validateSessionId(HttpServletRequest request,HttpServletResponse response){


        boolean result = false;

        HttpSession session = request.getSession(false);

    //    JsonHttpResponse.send(response, 200, session.getId(), null);

        if(session != null){

            var currentSessionId = session.getId();

            var sessionCookie = getCookies(request, "JSESSIONID");

            if(sessionCookie == null){

                return result;

            }

            if(currentSessionId.equals(sessionCookie)){

                result = true;

            }
        }


        return result;

    }

    public static String getCookies(HttpServletRequest request, String cookieName){

        Cookie[] cookies = request.getCookies();
        String sessionId = null;

        if(cookies != null){

            for(Cookie cookie : cookies){

                if(cookie.getName().equals(cookieName)){
                    sessionId = cookie.getValue();
                    break;
                }

            }

        }

        return sessionId;

    }
    

    public static HttpSession create(HttpServletRequest request, HttpServletResponse response){

        // Create a session object if it is already not  created.
         HttpSession session = request.getSession();



         if(session.isNew()){

            Date sessionCreationdate = new Date(session.getCreationTime());
            SimpleDateFormat simpleDate = new SimpleDateFormat("E yyyy-MM-dd 'at' hh:mm:ss a zzz");

            String sessionCreationdateFormat = simpleDate.format(sessionCreationdate);

            // Get last access time of this web page.
            Date lastAccessTime = new Date(session.getLastAccessedTime());
            String lastAccessTimeFormat = simpleDate.format(lastAccessTime);

            session.setAttribute(SESSION_ID, session.getId());
            session.setAttribute(SESSION_START_TIME, sessionCreationdateFormat);
            session.setAttribute(SESSION_LAST_ACCESS, lastAccessTimeFormat);

            JsonHttpResponse.send(response, 200, "created a session", null);

         }

         return session;

    }
    
}
