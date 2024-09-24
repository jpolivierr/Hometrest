package com.appvenir.hometrest.web.pages;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/error")
public class Error {

    public String error(){
        return "foward:/error.html";
    }
    
}
