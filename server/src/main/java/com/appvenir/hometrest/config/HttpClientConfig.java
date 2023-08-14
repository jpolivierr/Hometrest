package com.appvenir.hometrest.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.client.WebClient;

import io.github.cdimascio.dotenv.Dotenv;


@Configuration
public class HttpClientConfig {

    @Bean
    public WebClient.Builder webClientBuilder(){

		Dotenv dotenv = Dotenv.configure().load();

        return WebClient.builder()
		        .baseUrl("https://realty-in-us.p.rapidapi.com")
				.codecs(configurer -> configurer.defaultCodecs().maxInMemorySize(500000))
		        .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
				.defaultHeader("X-RapidAPI-Key", dotenv.get("RAPID_API_KEY"))
				.defaultHeader("X-RapidAPI-Host", "realty-in-us.p.rapidapi.com");

	}


}
