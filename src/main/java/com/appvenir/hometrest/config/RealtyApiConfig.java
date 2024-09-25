package com.appvenir.hometrest.config;

import java.net.http.HttpClient;
import java.net.http.HttpRequest;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.appvenir.hometrest.api.realty.RealtyApi;
import com.appvenir.hometrest.api.realty.service.RealtyApiService;
import com.appvenir.hometrest.api.realty.service.RealtyApiServiceProxy;
import com.fasterxml.jackson.databind.ObjectMapper;

@Configuration
public class RealtyApiConfig {

    private final HttpClient httpClient;
    private final HttpRequest.Builder realtyRequestBuilder;
    private final ObjectMapper objectMapper;

    
    public RealtyApiConfig(HttpClient httpClient, HttpRequest.Builder realtyRequestBuilder) {
        this.httpClient = httpClient;
        this.realtyRequestBuilder = realtyRequestBuilder;
        this.objectMapper = new ObjectMapper();
    }

    @Bean
    @Profile("dev")
    public RealtyApi realtyApiDev() {
        return new RealtyApiServiceProxy(objectMapper);
    }

    @Bean
    @Profile("prod")
    public RealtyApi realtyApiProd() {
        return new RealtyApiService(realtyRequestBuilder, httpClient);
    }
}
