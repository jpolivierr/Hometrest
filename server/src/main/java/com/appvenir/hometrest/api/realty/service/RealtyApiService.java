package com.appvenir.hometrest.api.realty.service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpRequest.BodyPublishers;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.HashMap;
import java.util.concurrent.CompletableFuture;

import org.apache.hc.core5.net.URIBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.appvenir.hometrest.Exceptions.realtyApiException.RealtyApiException;
import com.appvenir.hometrest.api.realty.RealtyApi;
import com.appvenir.hometrest.helper.httpResponseHandler.ResponseHandler;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import reactor.core.publisher.Flux;

@Service
public class RealtyApiService implements RealtyApi {

    private WebClient webClient;
    private HttpClient httpClient;
    private HttpRequest.Builder realtyRequestBuilder;
    private final String REALTY_URI = "https://realty-in-us.p.rapidapi.com";
    private final ObjectMapper objectMapper = new ObjectMapper();

    public RealtyApiService(WebClient.Builder webClientBuilder, HttpRequest.Builder realtyRequestBuilder, HttpClient httpClient){

        this.webClient = webClientBuilder.build();
        this.realtyRequestBuilder = realtyRequestBuilder;
        this.httpClient = httpClient;

    }

    public CompletableFuture<String> findAll(Object propertySearch){

        try {
        String requestBody = objectMapper.writeValueAsString(propertySearch);    
        String uri = new URIBuilder(REALTY_URI)
                                .setPath("/properties/v3/list")
                                .build()
                                .toString();

        HttpRequest request = realtyRequestBuilder
                                            .uri(URI.create(uri))
                                            .POST(BodyPublishers.ofString(requestBody))
                                            .header("Content-Type", "application/json")
                                            .build();
        return httpClient.sendAsync(request, BodyHandlers.ofString())
                         .thenApply( response -> {
                            
                            HashMap<String,String> errors = handleErrorResponse(response.body());

                            if(errors.size() > 0) throw new RealtyApiException(errors);

                            return ResponseHandler.onSuccess(response, (body) -> body);

                         });

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

        
    }

    public CompletableFuture<String>findPropertyById(String id){

        var uri = REALTY_URI + "/properties/v3/detail?property_id=" + id;

        HttpRequest request = realtyRequestBuilder
                                        .uri(URI.create(uri))
                                        .GET()
                                        .build();
                                    
        return httpClient.sendAsync(request, BodyHandlers.ofString())
                         .thenApply( response -> {

                            HashMap<String,String> errors = handleErrorResponse(response.body());

                            if(errors.size() > 0) throw new RealtyApiException(errors);

                            return ResponseHandler.onSuccess(response, (body) -> body);
                        });

    }

      public CompletableFuture<String> findSimilarProperties(String id){

        try {

        String uri = new URIBuilder(REALTY_URI)
                                    .setPath("/properties/v3/list-similar-homes")
                                    .addParameter("property_id", id)
                                    .build()
                                    .toString();

         HttpRequest request = realtyRequestBuilder
                                .uri(URI.create(uri))
                                .GET()
                                .build();

        return httpClient.sendAsync(request, BodyHandlers.ofString())
                         .thenApply( response -> {

                            HashMap<String,String> errors = handleErrorResponse(response.body());

                            if(errors.size() > 0) throw new RealtyApiException(errors);

                            return ResponseHandler.onSuccess(response, (body) -> body);

                         });                      
            
        } catch (Exception e) {

            e.printStackTrace();

            return null;
        }
                      
    }

    public HashMap<String,String> handleErrorResponse(String body){

        ObjectMapper objectMapper = new ObjectMapper();

        HashMap<String,String> errors = new HashMap<>();

        try {

            JsonNode rootNode = objectMapper.readTree(body);

            if(rootNode.has("errors") && rootNode.get("errors").isArray()){
                
                JsonNode errorNode = rootNode.path("errors").get(0);

                errors.put("message", errorNode.path("message").asText());
                errors.put("name", errorNode.path("name").asText());
                errors.put("time_thrown", errorNode.path("time_thrown").asText());
                errors.put("errorCode", errorNode.path("data").path("errorCode").asText());

            }

            
        } catch (IOException e) {

            e.printStackTrace();

        }

        return errors;

    }

    
}
