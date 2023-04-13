package com.hometrest.makeRequest;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.concurrent.CompletableFuture;

import io.github.cdimascio.dotenv.Dotenv;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class MakeRequest {

    private final static Dotenv dotenv = Dotenv.load();
    private final static String REALTOR_API_KEY = dotenv.get("REALTOR_API_KEY");
    private static final Gson gson = new GsonBuilder().setPrettyPrinting().create();
    private static final HttpClient client = HttpClient.newHttpClient();
    private static Object jsonResponse = null;

    public static Object get(String url) {


        HttpRequest request = HttpRequest.newBuilder()
                        .uri(URI.create(url))
                        .header("accept", "application/json")
                        .header("X-RapidAPI-Key", REALTOR_API_KEY )
                        .header("X-RapidAPI-Host", "realty-in-us.p.rapidapi.com")
                        .method("GET", HttpRequest.BodyPublishers.noBody())
                        .build();

        
  
        CompletableFuture<HttpResponse<String>> future = client.sendAsync(request, HttpResponse.BodyHandlers.ofString());


      
        future.thenApply(HttpResponse::body)
            .thenApply(MakeRequest::parseJsonResponse)
            .thenAccept((response) -> jsonResponse = response)
            .exceptionally(MakeRequest::handleException)
            .join();

            return jsonResponse;
    }


    private static Object parseJsonResponse(String responseBody) {
        
        try {
            // assuming the response body is a JSON object
            Object json = gson.fromJson(responseBody, Object.class);
            // String jsonString = gson.toJson(json);
            return json;
        } catch (Exception e) {
            throw new RuntimeException("Failed to parse JSON response", e);
        }
    }

     private static Void handleException(Throwable t) {
        System.err.println("Request failed: " + t.getMessage());
        t.printStackTrace();
        return null;
    }


    
}
