package com.appvenir.hometrest.api.propertySearch;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.appvenir.hometrest.api.tools.ApiResponse.ApiResponse;

@Controller
@RequestMapping(path="/api/v1/property_search")
public class PropertySearchController {

    private ApiResponse apiResponse;

    public PropertySearchController(ApiResponse apiResponse){

        this.apiResponse = apiResponse;

    }


    @PostMapping(path = "/list")
    public  ResponseEntity<Object> search( @RequestBody PropertySearch propertySearch){

    //     try {
    //     // Sleep for 5 seconds
    //     Thread.sleep(10000);
    // } catch (InterruptedException e) {
    //     e.printStackTrace();
    // }

        return apiResponse.create(200, "sucess", propertySearch);
        
    }
    
}
