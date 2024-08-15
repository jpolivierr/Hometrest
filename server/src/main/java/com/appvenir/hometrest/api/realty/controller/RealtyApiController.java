package com.appvenir.hometrest.api.realty.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.appvenir.hometrest.api.realty.RealtyApi;

@RestController
@RequestMapping(path="/api/v1/property_search")
public class RealtyApiController {

    private final RealtyApi realtyApi;

    public RealtyApiController(RealtyApi realtyApi
      ) {
        this.realtyApi = realtyApi;
    }

    @PostMapping(path = "/list")
    public Object findPropertyList(@RequestBody String propertySearch)
    {
      return realtyApi.findPropertyList(propertySearch);
    }

    @GetMapping(path = "/details/{property_id}")
    public Object details(@PathVariable("property_id")String propertyId){
       return realtyApi.findPropertyById(propertyId);
    }
    
}
