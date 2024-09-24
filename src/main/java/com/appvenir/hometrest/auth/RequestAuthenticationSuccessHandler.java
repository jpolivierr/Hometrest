package com.appvenir.hometrest.auth;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.appvenir.hometrest.auth.dto.UserDetailsDto;
import com.appvenir.hometrest.domain.user.mapper.UserMapper;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class RequestAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    private final ObjectMapper objectMapper;

    public RequestAuthenticationSuccessHandler(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {

        try {
            UserDetailsDto userDetails = (UserDetailsDto) authentication.getPrincipal();
            var userDto = UserMapper.toDto(userDetails.getUser());
            response.setContentType("application/json");
            response.getWriter().write(objectMapper.writeValueAsString(userDto));
            response.getWriter().flush();
        } catch (Exception e) {
            e.printStackTrace();
        }
        
    }
}
