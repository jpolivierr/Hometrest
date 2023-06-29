package com.appvenir.hometrest.api.propertySearch;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(path="/api/v1/property_search")
public class PropertySearchController {


    @GetMapping(path = "")
    public String search(){
        
    }
    
}
