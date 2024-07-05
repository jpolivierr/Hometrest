package com.appvenir.hometrest.api.realty.service;

import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.concurrent.CompletableFuture;
import java.util.stream.StreamSupport;

import org.springframework.stereotype.Service;

import com.appvenir.hometrest.api.realty.RealtyApi;
import com.appvenir.hometrest.api.realty.dto.RealtyErrorResponseDto;
import com.appvenir.hometrest.exception.realtyApiException.RealtyApiException;
import com.appvenir.hometrest.helper.httpHandler.MakeRequest;
import com.appvenir.hometrest.helper.httpHandler.ResponseHandler;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;


@Service
public class RealtyApiService implements RealtyApi {


    private final String REALTY_URI = "https://realty-in-us.p.rapidapi.com";
    private final MakeRequest makeRequest;

    public RealtyApiService( HttpRequest.Builder realtyRequestBuilder, HttpClient httpClient, MakeRequest makeRequest){
        this.makeRequest = makeRequest;
    }

    public CompletableFuture<String> findPropertyList(Object propertySearch){

            String uri = REALTY_URI + "/properties/v3/list";

            return makeRequest.asyncPost(uri, propertySearch, BodyHandlers.ofString())
                        .thenApply( response -> {
                    ResponseHandler.onFailure(response, 
                    () ->  new RealtyApiException("Realty api failure",response.statusCode(), response.body()));
                    return ResponseHandler.onSuccess(response, (body) -> {
                        handleErrorFromData(body);
                        return body;
                    });
            });
        
    }

    public CompletableFuture<String>findPropertyById(String id){

        var uri = REALTY_URI + "/properties/v3/detail?property_id=" + id;

        return makeRequest.asyncGet(uri, BodyHandlers.ofString())
                        .thenApply( response -> {
                    ResponseHandler.onFailure(response, 
                    () ->  new RealtyApiException("Realty api failure",response.statusCode(), response.body()));
                    return ResponseHandler.onSuccess(response, (body) -> {
                        handleErrorFromData(body);
                        return body;
                    });
            });

    }

      public CompletableFuture<String> findSimilarProperties(String id){
        
        String uri = REALTY_URI + "/properties/v3/list-similar-homes?property_id=" + id;

        return makeRequest.asyncGet(uri, BodyHandlers.ofString())
                        .thenApply( response -> {
                    ResponseHandler.onFailure(response, 
                    () ->  new RealtyApiException("Realty api failure",response.statusCode(), response.body()));
                    return ResponseHandler.onSuccess(response, (body) -> {
                        handleErrorFromData(body);
                        return body;
                    });
            });                      
                      
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
