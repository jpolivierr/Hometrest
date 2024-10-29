package com.appvenir.hometrest.auth.authController;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.appvenir.hometrest.auth.provider.JwtAuthenticationProvider;
import com.appvenir.hometrest.config.security.jwt.JwtResponse;
import com.appvenir.hometrest.config.security.jwt.JwtUtil;
import com.appvenir.hometrest.domain.user.dto.UserLoginDto;
import com.appvenir.hometrest.exception.user.UserNotFoundException;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final JwtAuthenticationProvider jwtAuthenticationProvider;
    private final JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserLoginDto userLoginDto) throws AuthenticationException, UserNotFoundException
    {
        var unAuthenticatedToken = new UsernamePasswordAuthenticationToken(userLoginDto.getEmail(), userLoginDto.getPassword());

        Authentication authentication = jwtAuthenticationProvider.authenticate(unAuthenticatedToken);

        String token = jwtUtil.generateToken(authentication);

        return ResponseEntity.ok().body(new JwtResponse(token));
    }

    @PostMapping("/logout")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void logout(@NonNull HttpServletRequest request)
    {
        
        final String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);

        String jwtToken = null;

        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            // Extract the token
            jwtToken = authorizationHeader.substring(7);
        }


    }
    
}
