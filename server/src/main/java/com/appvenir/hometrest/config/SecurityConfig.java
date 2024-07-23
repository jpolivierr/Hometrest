package com.appvenir.hometrest.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.appvenir.hometrest.filter.exception.GlobalExceptionFilter;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final GlobalExceptionFilter globalExceptionFilter;
    private final CorsConfigurationSource corsConfigurationSource;

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
                .formLogin( login -> {
                    login.loginPage("/login")
                    .usernameParameter("email")
                    .defaultSuccessUrl("/dashboard");
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
                            "/api/users/**",
                            "/api/v1/**",
                            "/"
                        };
    }

    
}
