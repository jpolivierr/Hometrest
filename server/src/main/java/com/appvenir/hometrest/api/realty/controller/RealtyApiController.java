package com.appvenir.hometrest.api.realty.controller;
import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.appvenir.hometrest.api.realty.RealtyApi;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping(path="/api/v1/property_search")
public class RealtyApiController {

    private final RealtyApi realtyApi;
        private final ObjectMapper objectMapper;

    public RealtyApiController(
      @Qualifier("realtyApiService") RealtyApi realtyApi,
      ObjectMapper objectMapper
      ) {
        this.realtyApi = realtyApi;
        this.objectMapper = objectMapper;
    }

    @PostMapping(path = "/list")
    public Object findPropertyList(@RequestBody String propertySearch)
    {
        System.out.println("==========================");
        System.out.println(propertySearch);
      return realtyApi.findPropertyList(propertySearch);
    }

    @GetMapping(path = "/details/{property_id}")
    public CompletableFuture<Object> details(@PathVariable("property_id")String propertyId){
       return realtyApi.findPropertyById(propertyId)
                    .thenApplyAsync(response -> {
                            try {
                                // Convert the JSON string to a Java object
                                return objectMapper.readValue(response, Object.class);
                            } catch (Exception e) {
                                throw new RuntimeException("Failed to convert JSON string to Object", e);
                            }
        });
    }

    @GetMapping(path = "/property_id")
    public CompletableFuture<String> findSimilarProperties(@RequestParam("property_id") String propertyId) throws InterruptedException{
       return realtyApi.findSimilarProperties(propertyId);
    }
    
}
