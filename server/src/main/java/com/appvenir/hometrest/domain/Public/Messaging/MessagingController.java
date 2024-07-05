package com.appvenir.hometrest.domain.Public.Messaging;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

import jakarta.validation.Valid;

@Controller
@RequestMapping(path="/api/v1/messaging")
public class MessagingController {

    @ResponseStatus(HttpStatus.OK)
    @PostMapping(path = "")
    public void received(@Valid @RequestBody Messaging messaging){
        
    }
    
}
