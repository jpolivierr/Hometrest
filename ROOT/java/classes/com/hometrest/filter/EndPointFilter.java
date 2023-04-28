package com.hometrest.filter;

import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLEncoder;
import java.util.Arrays;
import java.util.HashMap;

import com.hometrest.MySessionManagement;
import com.hometrest.Paths;
import com.hometrest.Redirects;
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
      // PrintWriter out = httpResponse.getWriter();
       

       if (queryString != null) {

         requestURL += "?" + encodeURL(queryString);

       }

       String origin = httpRequest.getHeader("Origin");


        if (origin != null && (origin.equals(Paths.LOCAL_8080) || origin.equals(Paths.LOCAL_3000))) {

            httpResponse.setHeader("Access-Control-Allow-Origin", origin);

        }

       httpResponse.setHeader("Access-Control-Allow-Credentials", "true");

       httpResponse.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");

       HttpSession session = httpRequest.getSession(false);


      if(session == null){

          chain.doFilter(request, response);

      }else{

            String sessionExist = MySessionManagement.validateSessionId(session,httpRequest);

            if(sessionExist != null){

                  String path = httpRequest.getServletPath();

                  HashMap<String, String> redirectMap = new HashMap<String, String>();

                  redirectMap.put(Paths.LOGIN, "/");
                  redirectMap.put(Paths.SIGNUP, "/");

                  if(redirectMap.containsKey(path)){

                     httpResponse.sendRedirect(redirectMap.get(path));

                     return;

                  }

                  chain.doFilter(request, response);
                  
                  
            }else{
               //  out.print("session exist but is not valie <br>");
                chain.doFilter(request, response);

            }

          

      }

     

 }

    public void destroy() {}  
}
