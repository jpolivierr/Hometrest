package com.appvenir.hometrest.filter;

import java.io.IOException;

import org.springframework.boot.autoconfigure.web.ServerProperties.Reactive.Session;
import org.springframework.security.access.AccessDeniedException;

import com.appvenir.hometrest.sessionConfig.MySesionConfig;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

public class MyRequestFilter implements Filter {

     @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        
    }
    
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException{

        HttpServletRequest httpRequest = (HttpServletRequest) request;

        HttpSession session = httpRequest.getSession(false);

        String method = httpRequest.getMethod();

        if(method.equals("POST")){

            chain.doFilter(request, response);

            return;

        }

        
        if( session == null ) throw new AccessDeniedException("Unauthorized here");


        String email = (String) session.getAttribute(MySesionConfig.EMAIL);

        if( email == null){
             session.invalidate();
             session = null;
             throw new AccessDeniedException("Unauthorized here");
            }

        chain.doFilter(request, response);

    }
}
