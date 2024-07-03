package com.appvenir.hometrest.helper.httpResponseHandler;

import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpRequest.BodyPublishers;
import java.net.http.HttpResponse;
import java.util.concurrent.CompletableFuture;
import java.util.function.Function;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import com.appvenir.hometrest.exception.makeRequest.MakeRequestException;
import com.appvenir.hometrest.exception.realtyApiException.RealtyApiException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;


@Component
public class MakeRequest {

    private final ObjectMapper objectMapper;
    private HttpClient httpClient;
    private HttpRequest.Builder realtyRequestBuilder;

    @FunctionalInterface
    public interface CheckedSupplier<T> {
        T get() throws URISyntaxException, Exception;
    }

    public MakeRequest(HttpRequest.Builder realtyRequestBuilder, HttpClient httpClient){
        this.objectMapper = new ObjectMapper();
        this.httpClient = httpClient;
        this.realtyRequestBuilder = realtyRequestBuilder;
    }


    public <T> CompletableFuture<HttpResponse<T>> asyncPost(String uri, Object body, HttpResponse.BodyHandler<T> responseBodyHandler){

        return handleRequest(() -> {
                    new URI(uri);
                    String requestBody = objectMapper.writeValueAsString(body); 
                    HttpRequest request = realtyRequestBuilder
                                            .uri(URI.create(uri))
                                            .POST(BodyPublishers.ofString(requestBody))
                                            .build();
                    return httpClient.sendAsync(request, responseBodyHandler);
        });

    }

    public <T> CompletableFuture<HttpResponse<T>> handleRequest(CheckedSupplier<CompletableFuture<HttpResponse<T>>> checkedSupplier){

        try {
            return checkedSupplier.get();
        } 
        catch (URISyntaxException e) {
            e.printStackTrace();
            return CompletableFuture.failedFuture(new MakeRequestException("Invalid request URI", e));
        }catch (JsonProcessingException e) {
            e.printStackTrace();
            return CompletableFuture.failedFuture(new MakeRequestException("Invalid property search data", e));
        }  catch (Exception e) {
            e.printStackTrace();
            return CompletableFuture.failedFuture(new MakeRequestException("Unexpected error occurred", e));
        }

    }

    public static <T> T onSuccess(HttpResponse<T> response, Function<T,T> handleResponse){

        if(HttpStatus.Series.valueOf(response.statusCode()) == HttpStatus.Series.SUCCESSFUL){
            return handleResponse.apply(response.body());
        }else{
            throw new RuntimeException("Request failed with status code: " + response.statusCode());
        }
    }
    
}
