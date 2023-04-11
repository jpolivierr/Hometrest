package com.hometrest.filter;

import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

import com.hometrest.JsonResponse.JsonHttpResponse;
import com.hometrest.SessionManagement.SessionManagement;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;

@WebFilter(filterName="SessioFilter", urlPatterns="/*")

public class EndPointFilter implements Filter {

    public void init(FilterConfig filterConfig) {}


    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
    throws IOException, ServletException{

      
       
       var httpRequest = (HttpServletRequest) request;
       var httpResponse = (HttpServletResponse) response;
       httpResponse.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
      //  httpResponse.setHeader("Access-Control-Allow-Credentials", "true");
      //  var device = new RequestInfoFilter(httpRequest);

      var sessionExist = SessionManagement.validateSessionId(httpRequest,httpResponse);

      if(!sessionExist){

         JsonHttpResponse.send(response, 200,"no sessions found", null);

      }else{

         JsonHttpResponse.send(response, 200,"session found", null);
         httpResponse.sendRedirect("http://localhost:3001");

      }



      chain.doFilter(request, response);
    //    httpResp.send(response,200,"Session filter",null);

 }

    public void destroy() {}  
}
