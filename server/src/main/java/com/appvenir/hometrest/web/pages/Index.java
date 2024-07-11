package com.appvenir.hometrest.web.pages;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class Index {

    private String title;

    public Index(){
        this.title = "Home";
    }

    @GetMapping
    public String index(Model model){
        model.addAttribute("title", title);
        return "index";
    }
    
}
