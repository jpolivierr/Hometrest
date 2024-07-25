package com.appvenir.hometrest.auth;

import java.io.IOException;
import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import com.appvenir.hometrest.auth.dto.UserDetailsDto;
import com.appvenir.hometrest.domain.user.mapper.UserMapper;
import com.appvenir.hometrest.exception.ErrorResponse;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@Component
public class RequestAuthenticationFailureHandler implements AuthenticationFailureHandler{

    private final ObjectMapper objectMapper;

    public RequestAuthenticationFailureHandler(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
            AuthenticationException exception) throws IOException, ServletException {
         try {
            
            ErrorResponse errorResponse = ErrorResponse.builder()
                                            .timestamp(LocalDateTime.now())
                                            .status(HttpStatus.UNAUTHORIZED.value())
                                            .message("Invalid username or password. Please double-check your credentials and try again.")
                                            .path(request.getRequestURI())
                                            .build();
            
            response.setStatus(HttpStatus.UNAUTHORIZED.value());
            response.setContentType("application/json");
            response.getWriter().write(objectMapper.writeValueAsString(errorResponse));
            response.getWriter().flush();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
}
