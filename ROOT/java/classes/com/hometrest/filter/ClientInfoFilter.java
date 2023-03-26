package com.hometrest.filter;

import jakarta.servlet.annotation.WebFilter;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;

@WebFilter(filterName="ClientInfoFilter", urlPatterns="/*")
public class ClientInfoFilter implements Filter {

    public void init(FilterConfig filterConfig) {}

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
    throws IOException, ServletException{
         
        PrintWriter out = response.getWriter();

        out.println("ClientInfo : Before");

        chain.doFilter(request, response);

        out.println("ClientInfo : After");

 }

    public void destroy() {}  
}
