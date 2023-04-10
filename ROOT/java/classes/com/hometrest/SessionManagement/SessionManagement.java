package com.hometrest.SessionManagement;

import java.sql.Date;
import java.text.SimpleDateFormat;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.servlet.http.Cookie;

public class SessionManagement {

        public final static String SESSION_ID = "SESSION_ID";
        public final static String SESSION_START_TIME = "TART_TIME";
        public final static String SESSION_LAST_ACCESS = "LAST_ACCESS";

    public static void lookupSession(HttpServletRequest request, HttpServletResponse response){

        HttpSession session = request.getSession(false);

        if(session != null && !session.isNew()){

        }

    }
    

    public static void create(HttpServletRequest request, HttpServletResponse response){

        // Create a session object if it is already not  created.
         HttpSession session = request.getSession(true);

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

            Cookie sessionCookie = new Cookie("SESSIONID", session.getId());

            sessionCookie.setSecure(true);

            sessionCookie.setHttpOnly(true);

            sessionCookie.setMaxAge(3600);
        
            response.addCookie(sessionCookie);

         }

    }
    
}
