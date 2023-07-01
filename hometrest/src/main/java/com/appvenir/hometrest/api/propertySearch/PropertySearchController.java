package com.appvenir.hometrest.api.propertySearch;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

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

    //     try {
    //     // Sleep for 5 seconds
    //     Thread.sleep(10000);
    // } catch (InterruptedException e) {
    //     e.printStackTrace();
    // }

    //    return propertySearchService.findAll(propertySearch);

       Flux<Object> propertyList = propertySearchService.findAll(propertySearch);

       return propertyList;

        //  return apiResponse.create(200, "sucess", propertyList);
        
    }
    
}
