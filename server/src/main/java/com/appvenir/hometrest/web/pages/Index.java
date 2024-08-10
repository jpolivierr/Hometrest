package com.appvenir.hometrest.web.pages;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Index {

    @GetMapping(value = "/{path:[^\\.]*}")
    public String index(Model model){
        return "forward:/index.html";
    }
    
}
