package com.hometrest.filter;

import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLEncoder;

import com.hometrest.MySessionManagement;
import com.hometrest.Util.FormatDate;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;



@WebFilter(filterName="SessioFilter", urlPatterns="/*")

public class EndPointFilter implements Filter {

    public void init(FilterConfig filterConfig) {}

    public static String encodeURL(String url) {
      String encodedURL = "";
      try {
          encodedURL = URLEncoder.encode(url, "UTF-8");
      } catch (Exception e) {
          e.printStackTrace();
      }
      return encodedURL;
  }


    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
    throws IOException, ServletException{
      
       var httpRequest = (HttpServletRequest) request;
       var httpResponse = (HttpServletResponse) response;
       String requestURL = httpRequest.getRequestURL().toString();
       String queryString = httpRequest.getQueryString();
      PrintWriter out = httpResponse.getWriter();
       

       if (queryString != null) {

         requestURL += "?" + encodeURL(queryString);

       }

       httpResponse.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");

       httpResponse.setHeader("Access-Control-Allow-Credentials", "true");

       httpResponse.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");

       HttpSession session = httpRequest.getSession(false);

      //  out.println("Filter ran.. <br>");

      if(session == null){

         // JsonHttpResponse.send(response, 200,"no sessions found", null);
          out.print("session do not exist. <br>");

            
      }else{

            String sessionExist = MySessionManagement.validateSessionId(session,httpRequest);

            if(sessionExist != null){
               // String lastSession = FormatDate.format(session.getLastAccessedTime(), "E yyyy-MM-dd 'at' hh:mm:ss a zzz");
               //          out.println("SessioID: " + session.getAttribute("SESSION_ID") + "<br>");
               //          out.println("Start time: " + session.getAttribute("START_TIME") + "<br>");
               //          out.println("last access: " + lastSession + "<br>");
               //          out.println("email: " + session.getAttribute("email"));

                        // httpResponse.sendRedirect("http://localhost:3001");
                           String path = httpRequest.getServletPath();

                        switch(path){
                           case "/login" :
                              httpResponse.sendRedirect("/");
                              break;
                           default :
                              return ;

                        }
            }

          

      }


      chain.doFilter(request, response);

 }

    public void destroy() {}  
}
