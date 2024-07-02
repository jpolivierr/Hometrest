package com.appvenir.hometrest.config;

import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.time.Duration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.web.firewall.HttpFirewall;
import org.springframework.security.web.firewall.StrictHttpFirewall;
import org.springframework.web.reactive.function.client.WebClient;

import io.github.cdimascio.dotenv.Dotenv;


@Configuration
public class HttpClientConfig {

	private final String REALTY_URI = "https://realty-in-us.p.rapidapi.com";

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

	@Bean
	public HttpFirewall webSecurityCustomizer() {
		StrictHttpFirewall firewall = new StrictHttpFirewall();
		firewall.setAllowBackSlash(true);
        firewall.setAllowUrlEncodedSlash(true);
        firewall.setAllowUrlEncodedPercent(true);
        firewall.setAllowSemicolon(true);
        firewall.setAllowUrlEncodedDoubleSlash(true);
		return firewall;
	}


}
