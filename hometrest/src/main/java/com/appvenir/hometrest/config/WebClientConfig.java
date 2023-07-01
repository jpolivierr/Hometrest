package com.appvenir.hometrest.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.client.WebClient;

import io.github.cdimascio.dotenv.Dotenv;


@Configuration
public class WebClientConfig {

    @Bean
    public WebClient.Builder webClientBuilder(){

		Dotenv dotenv = Dotenv.configure().load();

        return WebClient.builder()
		        .baseUrl("https://realtor.p.rapidapi.com")
				.codecs(configurer -> configurer.defaultCodecs().maxInMemorySize(2 * 1024 * 1024))
		        .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
				.defaultHeader("X-RapidAPI-Key", dotenv.get("RAPID_API_KEY"))
				.defaultHeader("X-RapidAPI-Host", "realtor.p.rapidapi.com");

	}
        
    
}
