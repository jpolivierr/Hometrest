package com.hometrest.filter;

import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

import java.net.URLEncoder;

import com.hometrest.MySessionManagement;
import com.hometrest.Paths;
import com.hometrest.Redirects;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;



@WebFilter(filterName="SessioFilter", urlPatterns="/*")

public class EndPointFilter implements Filter {


    public void init(FilterConfig filterConfig) {

    }

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
       String requestUrl = httpRequest.getRequestURI();

       

       if (requestUrl.startsWith("/api") || requestUrl.startsWith("/secure")) {

        chain.doFilter(request, response);

        return;

      }


       if (queryString != null) {

         requestURL += "?" + encodeURL(queryString);

       }

       String origin = httpRequest.getHeader("Origin");


        if (origin != null && (origin.equals(Paths.LOCAL_8080) || origin.equals(Paths.LOCAL_3000))) {

            httpResponse.setHeader("Access-Control-Allow-Origin", origin);

        }

        // httpResponse.setHeader("Access-Control-Allow-Origin", Paths.LOCAL_3000);

        httpResponse.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Custom-Header, authorizationtoken");

        httpResponse.setHeader("Access-Control-Allow-Credentials", "true");

        httpResponse.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

        httpResponse.setHeader("Access-Control-Max-Age", "3600");

       HttpSession session = httpRequest.getSession(false);

      if(session == null){

          chain.doFilter(request, response);

          return;

      }

    String sessionExist = MySessionManagement.validateSessionId(session,httpRequest);

    if(sessionExist != null){

        String token = (String) session.getAttribute("token");

        httpResponse.setHeader("AuthorizationToken", token);

        boolean redirect = Redirects.send(httpRequest, httpResponse);

        if(!redirect){

            chain.doFilter(request, response);

        }
        
    }

 }

    public void destroy() {}  
}
