package com.appvenir.hometrest.filter;

import org.springframework.lang.NonNull;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.filter.OncePerRequestFilter;

import com.appvenir.hometrest.config.security.Paths;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;

import java.util.Arrays;

public abstract class AuthenticationFilter extends OncePerRequestFilter{
    
    private final AntPathMatcher pathMatcher = new AntPathMatcher();

    @Override
    protected boolean shouldNotFilter(@NonNull HttpServletRequest request) throws ServletException{

        String requestPath = request.getServletPath();

        return Arrays.stream(Paths.ALLOWED).anyMatch(allowedPath -> pathMatcher.match(allowedPath, requestPath));
    }
}
