package com.appvenir.hometrest.entryPoint.Public.propertySearch;
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
    public String list( @RequestBody Object propertySearch){
        System.out.println("========================");
        System.out.println("=== hit ");

        try {
            // Sleep the thread for 3 seconds (adjust as needed)
            Thread.sleep(8000);
        } catch (InterruptedException e) {
            // Handle the exception if needed
        }

        return "Response after sleeping for 3 seconds";
        
    }


    // @PostMapping(path = "/list")
    // public  Flux<Object> list( @RequestBody Object propertySearch){

    //    Flux<Object> propertyList = propertySearchService.findAll(propertySearch);

    //    return propertyList;
        
    // }

     @GetMapping(path = "/details")
    public Flux<Object>  details(@RequestParam("id")String id){

       Flux<Object> propertyList = propertySearchService.findSingle(id);

       return propertyList;
        
    }

    @GetMapping(path = "/similar_properties")
    public Flux<Object>  similar(@RequestParam("id")String id){

       Flux<Object> propertyList = propertySearchService.findSimilar(id);

       return propertyList;
        
    }
    
}
