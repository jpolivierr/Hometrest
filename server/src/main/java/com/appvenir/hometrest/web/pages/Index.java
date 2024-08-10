package com.appvenir.hometrest.web.pages;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Index {

    @GetMapping(value = "/{path:[^\\.]*}")
    public String home(){
        return "forward:/index.html";
    }

    @GetMapping(value = "/listings/buy")
    public String listingsBuy(){
        return "forward:/index.html";
    }

    @GetMapping(value = "/listings/rent")
    public String listingsRent(){
        return "forward:/index.html";
    }
    
}
