package com.appvenir.hometrest.web.pages;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.appvenir.hometrest.domain.user.dto.UserRegistrationDto;


@Controller
@RequestMapping("/dashboard")
public class Dashboard {

    private String title;

    public Dashboard(){
        this.title = "Dashboard";
    }

    @GetMapping
    public String signup(Model model) {
        model.addAttribute("title", title);
        model.addAttribute("userRegistration", new UserRegistrationDto());
        return "dashboard";
    }
    
}
