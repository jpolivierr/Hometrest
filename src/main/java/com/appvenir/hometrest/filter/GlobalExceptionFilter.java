package com.appvenir.hometrest.filter;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.appvenir.hometrest.exception.ErrorResponse;
import com.appvenir.hometrest.exception.user.UserNotFoundException;
import com.appvenir.hometrest.utils.validation.exception.ValidationException;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class GlobalExceptionFilter extends OncePerRequestFilter {

    private final ObjectMapper objectMapper;

    public GlobalExceptionFilter(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    @SuppressWarnings("null")
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        try {
            filterChain.doFilter(request, response);
        } catch (UserNotFoundException ex) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.setContentType("application/json");
            ErrorResponse errorResponse = ErrorResponse.builder()
                                .timestamp(LocalDateTime.now())
                                .status(HttpStatus.UNAUTHORIZED.value())
                                .error("Invalid email or password. Please double-check your credentials and try again.")
                                .message("Invalid email or password. Please double-check your credentials and try again.")
                                .path(request.getRequestURI())
                                .build();
            response.getWriter().write(objectMapper.writeValueAsString(errorResponse));
        } catch (ValidationException e) {
            var errors = e.getErrors();
            Map<String, String> obj = new LinkedHashMap<>();
            obj.put("emailError", errors.get("email"));
            obj.put("passwordError", errors.get("password"));
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            response.setContentType("application/json");
            ErrorResponse errorResponse = ErrorResponse.builder()
                                .timestamp(LocalDateTime.now())
                                .status(HttpStatus.BAD_REQUEST.value())
                                .error("Error")
                                .message("Error")
                                .path(request.getRequestURI())
                                .data(obj)
                                .build();
            response.getWriter().write(objectMapper.writeValueAsString(errorResponse));
        } catch (Exception ex) {
            ErrorResponse errorResponse = ErrorResponse.builder()
            .timestamp(LocalDateTime.now())
            .status(HttpStatus.BAD_REQUEST.value())
            .error("Error")
            .message("Error")
            .path(request.getRequestURI())
            .build();
            response.getWriter().write(objectMapper.writeValueAsString(errorResponse));
        }
    }
}
