package com.appvenir.hometrest.entryPoint.Public.propertySearch;

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

        public Flux<Object> findSingle( String id){

        return webClient.get()
                .uri("/properties/v3/detail?property_id=" + id)
                .retrieve()
                .bodyToFlux(Object.class);
                      

    }

      public Flux<Object> findSimilar(Object propertySearch){

         return webClient.post()
                .uri("/properties/v3/list")
                .bodyValue(propertySearch)
                .retrieve()
                .bodyToFlux(Object.class);
                      
    }

    
}
