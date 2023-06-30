package com.appvenir.hometrest.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.appvenir.hometrest.constants.AntPattern;
import com.appvenir.hometrest.filter.MyRequestFilter;

@Configuration
public class FilterConfig {

      @Bean
    public FilterRegistrationBean<MyRequestFilter> customFilterRegistration() {
        FilterRegistrationBean<MyRequestFilter> registrationBean = new FilterRegistrationBean<>();
        registrationBean.setFilter(new MyRequestFilter());
        registrationBean.addUrlPatterns(AntPattern.PUBLIC_API);

        return registrationBean;
    }
    
}
