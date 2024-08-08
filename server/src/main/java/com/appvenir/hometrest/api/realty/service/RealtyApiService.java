package com.appvenir.hometrest.api.realty.service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpRequest.BodyPublishers;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.stream.StreamSupport;

import org.springframework.stereotype.Service;

import com.appvenir.hometrest.api.realty.RealtyApi;
import com.appvenir.hometrest.api.realty.dto.RealtyErrorResponseDto;
import com.appvenir.hometrest.exception.realtyApiException.RealtyApiException;
import com.appvenir.hometrest.helper.httpHandler.MakeRequest;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;


@Service
public class RealtyApiService implements RealtyApi {

    private final ObjectMapper objectMapper;
    private final String REALTY_URI = "https://realty-in-us.p.rapidapi.com";
    private final MakeRequest makeRequest;
    private HttpClient httpClient;
    private HttpRequest.Builder realtyRequestBuilder;

    public RealtyApiService( HttpRequest.Builder realtyRequestBuilder, HttpClient httpClient, MakeRequest makeRequest){
        this.makeRequest = makeRequest;
        this.objectMapper = new ObjectMapper();
        this.httpClient = httpClient;
        this.realtyRequestBuilder = realtyRequestBuilder;
    }

    public Object findPropertyList(String propertySearch){

                try {
                    String uri = REALTY_URI + "/properties/v3/list";

                    HttpRequest request = realtyRequestBuilder
                    .uri(URI.create(uri))
                    .POST(BodyPublishers.ofString(propertySearch))
                    .build();

                    HttpResponse<String> response = httpClient.send(request, BodyHandlers.ofString());
                    return objectMapper.readValue(response.body(), Object.class);
                } catch (IOException e) {
                   
                    e.printStackTrace();
                    return "";
                } catch (InterruptedException e) {
                
                    e.printStackTrace();
                    return "";
                }
    }

    public Object findPropertyById(String id){

        var uri = REALTY_URI + "/properties/v3/detail?property_id=" + id;

        try {

            HttpRequest request = realtyRequestBuilder
            .uri(URI.create(uri))
            .GET()
            .build();

            HttpResponse<String> response = httpClient.send(request, BodyHandlers.ofString());
            System.out.println(response.statusCode());
            System.out.println(response.body());
            return objectMapper.readValue(response.body(), Object.class);
        } catch (IOException e) {
           
            e.printStackTrace();
            return "";
        } catch (InterruptedException e) {
        
            e.printStackTrace();
            return "";
        }

    }

 public void handleErrorFromData(String body) {

        try {
            ObjectMapper objectMapper = new ObjectMapper();

            JsonNode rootNode = objectMapper.readTree(body);

            if (rootNode.has("errors") && rootNode.get("errors").isArray()) {
                JsonNode errorsNode = rootNode.get("errors");
                RealtyErrorResponseDto dto = new RealtyErrorResponseDto();
                StreamSupport.stream(errorsNode.spliterator(), false).forEach(errorNode -> {
                    String name = errorNode.path("name").asText(null);
                    String timeThrown = errorNode.path("time_thrown").asText(null);
                    String message = errorNode.path("message").asText(null);

                    dto.setName(name);
                    dto.setTimeThrown(timeThrown);
                    dto.setMessage(message);

                    JsonNode dataNode = errorNode.path("data");
                    if (dataNode.isObject()) {
                        dto.setErrorCode(dataNode.path("errorCode").asText(null));
                        dto.setCode(dataNode.path("code").asText(null));
                        dto.setECode(dataNode.path("eCode").asText(null));
                        dto.setError(dataNode.path("error").asText(null));
                        if(dto.getMessage() == null){
                            dto.setMessage(dataNode.path("message").asText(null));
                        }
                        dto.setDescription(dataNode.path("description").asText(null));
                    }

                });
                throw new RealtyApiException(dto.getMessage(), dto.getCodeAsInt(), dto);
            }
        } 
        catch(RealtyApiException e){
            throw e;
        }
        catch (Exception e) {
            e.printStackTrace();
            throw new RealtyApiException("Something went wrong handling errors from data", 500, e.getCause());
        }
    }

    
}
