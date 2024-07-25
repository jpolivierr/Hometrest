package com.appvenir.hometrest.api.realty.controller;
import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.appvenir.hometrest.api.realty.RealtyApi;

@RestController
@RequestMapping(path="/api/v1/property_search")
public class RealtyApiController {

    private final RealtyApi realtyApi;

    public RealtyApiController(@Qualifier("realtyApiServiceProxy") RealtyApi realtyApi) {
        this.realtyApi = realtyApi;
    }

    @PostMapping(path = "/list")
    public  CompletableFuture<String> findPropertyList(@RequestBody String propertySearch)
    {
      System.out.println("==========================");
      System.out.println(propertySearch);
       return realtyApi.findPropertyList(propertySearch);
    }

    @GetMapping(path = "/details")
    public CompletableFuture<String> details(@RequestParam("property_id")String id){
       return realtyApi.findPropertyById(id);
    }

    @GetMapping(path = "/list-similar-homes")
    public CompletableFuture<String> findSimilarProperties(@RequestParam("property_id") String propertyId){
       return realtyApi.findSimilarProperties(propertyId);
    }
    
}
