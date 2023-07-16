package com.appvenir.hometrest.entryPoint.Public.propertySearch;

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import reactor.core.publisher.Flux;

@Controller
@RequestMapping(path="/api/v1/property_search")
public class PropertySearchController {

    private PropertySearchService propertySearchService;

    public PropertySearchController(PropertySearchService propertySearchService){

        this.propertySearchService = propertySearchService;

    }


    @PostMapping(path = "/list")
    public  Flux<Object>  search( @RequestBody Object propertySearch){

       Flux<Object> propertyList = propertySearchService.findAll(propertySearch);

       return propertyList;
        
    }

     @GetMapping(path = "/details")
    public Flux<Object>  search(@RequestParam("id")String id){

       Flux<Object> propertyList = propertySearchService.findSingle(id);

       return propertyList;
        
    }
    
}
