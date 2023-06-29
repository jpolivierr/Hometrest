package com.appvenir.hometrest.webMvcConfig;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final String home = "/**";
    private final String api = "/api/secure/**";
    // private final String logIn = "/process-login";


    @Bean
    public SecurityFilterChain securefilterChain(HttpSecurity http) throws Exception{

        http
            .csrf(csrf -> csrf.ignoringRequestMatchers(AntPathRequestMatcher.antMatcher(home)))
            .securityMatcher(AntPathRequestMatcher.antMatcher(home)) 
            .authorizeHttpRequests((auth) ->
                      auth
                     .anyRequest()
                     .permitAll()
                    //  .requestMatchers(AntPathRequestMatcher.antMatcher(api))
                    //  .
                    //  .authenticated()
                   
            )
            .cors(Customizer.withDefaults())
            .headers(headers -> 
                                 headers.cacheControl(cache -> cache.disable()) 
                                 )                                
            .headers(headers -> headers
                                 .contentTypeOptions(contentTypeOptions -> contentTypeOptions.disable())
                             );

            
        return http.build();

    }

    @Bean
    public SecurityFilterChain apifilterChain(HttpSecurity http) throws Exception{

        http
            .csrf(csrf -> csrf.ignoringRequestMatchers(AntPathRequestMatcher.antMatcher(api)))
            .securityMatcher(AntPathRequestMatcher.antMatcher(api)) 
            .authorizeHttpRequests((auth) ->
                      auth
                     .anyRequest()
                     .permitAll()
            )
            .cors(Customizer.withDefaults())
            .headers(headers -> 
                                 headers.cacheControl(cache -> cache.disable()) 
                                 )                                
            .headers(headers -> headers
                                 .contentTypeOptions(contentTypeOptions -> contentTypeOptions.disable())
                             );                       

            
        return http.build();

    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

// @Bean
// CorsConfigurationSource corsConfigurationSource() {
//   CorsConfiguration configuration = new CorsConfiguration();
//   configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
//   configuration.setAllowedMethods(Arrays.asList("GET","POST","PATCH", "PUT", "DELETE", "OPTIONS", "HEAD"));
//   configuration.setAllowCredentials(true);
//   configuration.setAllowedHeaders(Arrays.asList("Authorization", "Requestor-Type"));
//   configuration.setExposedHeaders(Arrays.asList("X-Get-Header"));
//   configuration.setMaxAge(3600L);
//   UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//   source.registerCorsConfiguration("/process-login", configuration);
//   return source;
// }



    
}
