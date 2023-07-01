package com.appvenir.hometrest.api.propertySearch;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import reactor.core.publisher.Flux;

@Service
public class PropertySearchService {

    private WebClient webClient;

    public PropertySearchService(WebClient.Builder webClientBuilder){

        this.webClient = webClientBuilder.build();

    }

    public Flux<Object> findAll(Object propertySearch){

        return webClient.post()
                .uri("/properties/v3/list")
                .bodyValue(propertySearch)
                .retrieve()
                .bodyToFlux(Object.class);
                      

    }

    
}
