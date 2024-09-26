package com.appvenir.hometrest.config;

import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.time.Duration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

import org.springframework.beans.factory.annotation.Value;

@Configuration
public class HttpClientConfig {

	@Value("${rapidApi.api.key}")
	private String rapidApiKey;

	@Bean
	public HttpRequest.Builder realtyRequestBuilder(){
		return HttpRequest.newBuilder()
						  .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
						  .header("x-rapidapi-key", rapidApiKey)
						  .header("x-rapidapi-host", "realty-in-us.p.rapidapi.com")
						  .header("Content-Type", "application/json");					
	}
	

	@Bean
	public HttpClient httpClient(){
		return HttpClient.newBuilder()
						 .connectTimeout(Duration.ofSeconds(10))
						 .build();
	}

}
