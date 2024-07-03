package com.appvenir.hometrest.api.realty.service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.HashMap;
import java.util.concurrent.CompletableFuture;

import org.apache.hc.core5.net.URIBuilder;
import org.springframework.stereotype.Service;

import com.appvenir.hometrest.api.realty.RealtyApi;
import com.appvenir.hometrest.exception.realtyApiException.RealtyApiException;
import com.appvenir.hometrest.helper.httpResponseHandler.MakeRequest;
import com.appvenir.hometrest.helper.httpResponseHandler.ResponseHandler;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;


@Service
public class RealtyApiService implements RealtyApi {

    private HttpClient httpClient;
    private HttpRequest.Builder realtyRequestBuilder;
    private final String REALTY_URI = "https://realty-in-us.p.rapidapi.com";
    private final MakeRequest makeRequest;

    public RealtyApiService( HttpRequest.Builder realtyRequestBuilder, HttpClient httpClient, MakeRequest makeRequest){
        this.realtyRequestBuilder = realtyRequestBuilder;
        this.httpClient = httpClient;
        this.makeRequest = makeRequest;
    }

    public CompletableFuture<String> findPropertyList(Object propertySearch){

            String uri = REALTY_URI + "/properties/v3/list";

            return makeRequest.asyncPost(uri, propertySearch, BodyHandlers.ofString())
                        .thenApply( response -> {
                            HashMap<String,String> errors = handleErrorResponse(response.body());
                            if(errors.size() > 0) throw new RealtyApiException(errors);
                            return ResponseHandler.onSuccess(response, (body) -> body);
            });
        
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
