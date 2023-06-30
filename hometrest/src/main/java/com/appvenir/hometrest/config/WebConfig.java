package com.appvenir.hometrest.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
// import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.appvenir.hometrest.filter.MyRequestFilter;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerInterceptor;



@Configuration
// @EnableWebMvc
public class WebConfig implements WebMvcConfigurer, HandlerInterceptor {

//   @Override
  public void addCorsMappings(CorsRegistry registry) {


    registry.addMapping("/**")
            .allowedOrigins("http://localhost:3000")
            .allowedMethods("GET","POST","PATCH", "PUT", "DELETE", "OPTIONS", "HEAD")
            .allowCredentials(true);

  }

  @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        response.setHeader("Pragma", "no-cache");
        return true;
    }


  @Override
  public void addInterceptors(InterceptorRegistry registry) {

      registry.addInterceptor(this);

  }


}
