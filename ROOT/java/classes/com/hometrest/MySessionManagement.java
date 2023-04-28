package com.hometrest;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.servlet.http.Cookie;
import com.hometrest.Util.FormatDate;

public class MySessionManagement {

        public final static String SESSION_ID = "SESSION_ID";
        public final static String SESSION_START_TIME = "START_TIME";
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

    public static String validateSessionId(HttpSession session, HttpServletRequest request){

        
        String sessionId = null;

        if(session != null){

            var currentSessionId = session.getId();

            String sessionCookie = getCookies(request, "JSESSIONID");

            if(sessionCookie == null){

                return sessionId;

            }

            String serverToken = (String) session.getAttribute("token");


            if(currentSessionId.equals(sessionCookie) && serverToken != null){

                sessionId = sessionCookie ;

            }
        }


        return sessionId;

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

            String format = "E yyyy-MM-dd 'at' hh:mm:ss a zzz";

            String sessionCreationdateFormat = FormatDate.format(session.getCreationTime(), format);

            // Get last access time of this web page.
            String lastAccessTimeFormat = FormatDate.format(session.getLastAccessedTime(), format);

            session.setMaxInactiveInterval(300);
            session.setAttribute(SESSION_ID, session.getId());
            session.setAttribute(SESSION_START_TIME, sessionCreationdateFormat);
            session.setAttribute(SESSION_LAST_ACCESS, lastAccessTimeFormat);

         }

         return session;

    }
    
}
