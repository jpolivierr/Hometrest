package com.appvenir.hometrest.web.pages;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/error")
public class Error {

    @GetMapping
    public String handleError() {
        // Return the custom error view
        return "error";
    }
    
}
