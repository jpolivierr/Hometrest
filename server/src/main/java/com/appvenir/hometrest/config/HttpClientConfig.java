package com.appvenir.hometrest.config;

import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.time.Duration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

import io.github.cdimascio.dotenv.Dotenv;


@Configuration
public class HttpClientConfig {

	@Bean
	public HttpRequest.Builder realtyRequestBuilder(){

		Dotenv dotenv = Dotenv.configure().load();

		return HttpRequest.newBuilder()
						  .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
						  .header("X-RapidAPI-Key", dotenv.get("RAPID_API_KEY"))
						  .header("X-RapidAPI-Host", "realty-in-us.p.rapidapi.com");					
	}
	

	@Bean
	public HttpClient httpClient(){

		return HttpClient.newBuilder()
						 .connectTimeout(Duration.ofSeconds(10))
						 .build();

	}

}
