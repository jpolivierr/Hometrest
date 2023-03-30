package com.hometrest.filter;

import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;

@WebFilter(filterName="SessioFilter", urlPatterns="/*")

public class SessionFilter implements Filter {

    public void init(FilterConfig filterConfig) {}


    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
    throws IOException, ServletException{

      
       
       var httpRequest = (HttpServletRequest) request;
       var httpResponse = (HttpServletResponse) response;
       httpResponse.setHeader("Access-Control-Allow-Origin", "*");
      //  var device = new RequestInfoFilter(httpRequest);

       // Create a session object if it is already not  created.
       HttpSession session = httpRequest.getSession(true);

      if(session.isNew()){

      SimpleDateFormat simpleDate = new SimpleDateFormat("E yyyy-MM-dd 'at' hh:mm:ss a zzz");
      

      // Get session creation time.
       Date sessionCreationdate = new Date(session.getCreationTime());
       String sessionCreationdateFormat = simpleDate.format(sessionCreationdate);

       // Get last access time of this web page.
       Date lastAccessTime = new Date(session.getLastAccessedTime());
       String lastAccessTimeFormat = simpleDate.format(lastAccessTime);


        session.setAttribute(ValidSessionKeys.SESSION_ID, session.getId());
        session.setAttribute(ValidSessionKeys.SESSION_START_TIME, sessionCreationdateFormat);
        session.setAttribute(ValidSessionKeys.SESSION_LAST_ACCESS, lastAccessTimeFormat);

      }else {

         SimpleDateFormat simpleDate = new SimpleDateFormat("E yyyy-MM-dd 'at' hh:mm:ss a zzz");

         // Get last access time of this web page.
         Date lastAccessTime = new Date(session.getLastAccessedTime());
         String lastAccessTimeFormat = simpleDate.format(lastAccessTime);

         session.setAttribute(ValidSessionKeys.SESSION_LAST_ACCESS, lastAccessTimeFormat);

      }


      chain.doFilter(request, response);
    //    httpResp.send(response,200,"Session filter",null);

 }

    public void destroy() {}  
}
