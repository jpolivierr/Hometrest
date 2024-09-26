package com.appvenir.hometrest.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.appvenir.hometrest.interceptor.RequestTrackingInterceptor;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer {

    private final RequestTrackingInterceptor requestTrackingInterceptor;

    @SuppressWarnings("null")
    @Override
    public void addInterceptors(InterceptorRegistry registry){
        registry.addInterceptor(requestTrackingInterceptor)
                .addPathPatterns("/api/v1/property_search/**");
    }
    
}
