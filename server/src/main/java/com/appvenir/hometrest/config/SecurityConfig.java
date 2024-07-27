package com.appvenir.hometrest.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfigurationSource;

import com.appvenir.hometrest.auth.RequestAuthenticationEntryPoint;
import com.appvenir.hometrest.auth.RequestAuthenticationFailureHandler;
import com.appvenir.hometrest.auth.RequestAuthenticationSuccessHandler;
import com.appvenir.hometrest.filter.exception.GlobalExceptionFilter;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final GlobalExceptionFilter globalExceptionFilter;
    private final CorsConfigurationSource corsConfigurationSource;
    private final RequestAuthenticationSuccessHandler requestAuthenticationSuccessHandler;
    private final RequestAuthenticationFailureHandler requestAuthenticationFailureHandler;
    private final RequestAuthenticationEntryPoint requestAuthenticationEntryPoint;

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        return http
                .csrf( csrf -> csrf.disable())
                .cors( cors -> cors.configurationSource(corsConfigurationSource))
                .addFilterBefore(globalExceptionFilter, UsernamePasswordAuthenticationFilter.class)
                .authorizeHttpRequests( auth -> auth
                                    .requestMatchers(allowedPath()).permitAll()
                                    .anyRequest().authenticated()              
                )
                .exceptionHandling( ex -> ex.authenticationEntryPoint(requestAuthenticationEntryPoint))
                .formLogin( login -> {
                    login.loginPage("/login")
                    .usernameParameter("email")
                    .successHandler(requestAuthenticationSuccessHandler)
                    .failureHandler(requestAuthenticationFailureHandler);
                    
                })
                .logout( logout -> {
                    logout.logoutUrl("/logout")
                          .logoutSuccessUrl("/login?logout")
                          .deleteCookies("JSESSIONID")
                          .invalidateHttpSession(true);
                })
                .build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    public String[] allowedPath(){
        return new String[]{
                            "/error",
                            "/logout/**",
                            "/signup/**",
                            "/login/**",
                            "/assets/**",
                            "/api/v1/property_search/**",
                            "/"
                        };
    }

    
}
