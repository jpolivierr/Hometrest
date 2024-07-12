package com.appvenir.hometrest.auth.provider;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.appvenir.hometrest.auth.service.UserAuthService;
import com.appvenir.hometrest.domain.user.dto.UserLoginDto;
import com.appvenir.hometrest.helper.validation.ObjectValidator;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class JpaAuthenticationProvider implements AuthenticationProvider {

    private final UserAuthService userAuthService;
    private final PasswordEncoder passwordEncoder;
    private final ObjectValidator objectValidator = new ObjectValidator();

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String email = authentication.getName();
        String password = authentication.getCredentials().toString();

        UserLoginDto userLoginDto = new UserLoginDto();
        userLoginDto.setEmail(email);
        userLoginDto.setPassword(password);

        objectValidator.validate(userLoginDto);

        // Will throw a UserNotFoundException if the user is not found
        UserDetails userDetails = userAuthService.loadUserByUsername(email);

        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Invalid credentials");
        }

        return new UsernamePasswordAuthenticationToken(userDetails, password, userDetails.getAuthorities());
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
    
}
