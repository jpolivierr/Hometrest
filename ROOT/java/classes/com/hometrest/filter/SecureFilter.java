package com.hometrest.filter;

import java.io.IOException;

import com.hometrest.JsonHttpResponse;
import com.hometrest.Paths;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@WebFilter(filterName="SecureFilter", urlPatterns="/secure/*")

public class SecureFilter implements Filter {

    public void init(FilterConfig filterConfig) {}

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
    throws IOException, ServletException{
      
       var httpRequest = (HttpServletRequest) request;
       var httpResponse = (HttpServletResponse) response;

       String origin = httpRequest.getHeader("Origin");

       if (origin != null && (origin.equals(Paths.LOCAL_8080) || origin.equals(Paths.LOCAL_3000))) {

           httpResponse.setHeader("Access-Control-Allow-Origin", origin);

       }

        httpResponse.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Custom-Header, authorizationtoken");

        httpResponse.setHeader("Access-Control-Allow-Credentials", "true");

        httpResponse.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

        httpResponse.setHeader("Access-Control-Max-Age", "3600");

        httpResponse.setHeader("Content-Type", "application/json");

        HttpSession session = httpRequest.getSession(false);

        if(session != null){

            JsonHttpResponse.send(response, 403, "not authorized", null);

            return;
        }

        chain.doFilter(request, response);

    
 }

    public void destroy() {}  
    
}
