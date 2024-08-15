package com.appvenir.hometrest.config;

import java.net.http.HttpClient;
import java.net.http.HttpRequest;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.appvenir.hometrest.api.realty.RealtyApi;
import com.appvenir.hometrest.api.realty.service.RealtyApiService;
import com.appvenir.hometrest.api.realty.service.RealtyApiServiceProxy;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.github.cdimascio.dotenv.Dotenv;

@Configuration
public class RealtyApiConfig {

    private final HttpClient httpClient;
    private final HttpRequest.Builder realtyRequestBuilder;
    private final ObjectMapper objectMapper;
    private final Dotenv dotenv;

    
    public RealtyApiConfig(HttpClient httpClient, HttpRequest.Builder realtyRequestBuilder) {
        this.httpClient = httpClient;
        this.realtyRequestBuilder = realtyRequestBuilder;
        this.objectMapper = new ObjectMapper();
        this.dotenv = Dotenv.load(); 
    }

    @Bean
    public RealtyApi realtyApi() {
        String realtyApiType = dotenv.get("REALTY_API", "PROXY");
        if ("PROXY".equalsIgnoreCase(realtyApiType)) {
            return new RealtyApiServiceProxy(objectMapper);
        } else if ("REALTY_USA".equalsIgnoreCase(realtyApiType)) {
            return new RealtyApiService(realtyRequestBuilder, httpClient);
        } else {
            throw new IllegalStateException("Unknown REALTY_API environment variable value: " + realtyApiType);
        }
    }
}
