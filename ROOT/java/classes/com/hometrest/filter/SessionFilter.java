package com.hometrest.filter;

import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;

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

       var device = new RequestInfoFilter(httpRequest);

       // Create a session object if it is already not  created.
       HttpSession session = httpRequest.getSession(true);

       SimpleDateFormat simpleDate = new SimpleDateFormat("E yyyy/MM/dd 'at' hh:mm a zzz");

       // Get session creation time.
       Date sessionCreationdate = new Date(session.getCreationTime());

       String createTime = simpleDate.format(sessionCreationdate);

       // Get last access time of this web page.
      //  Date lastAccessTime = new Date(session.getLastAccessedTime());

      if(session.isNew()){
        session.setAttribute("time-entered", device.fullURL);
        session.setAttribute("last-access", createTime);
      }


          chain.doFilter(request, response);
    //    httpResp.send(response,200,"Session filter",null);

 }

    public void destroy() {}  
}
