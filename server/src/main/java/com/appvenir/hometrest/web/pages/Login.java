package com.appvenir.hometrest.web.pages;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.appvenir.hometrest.domain.user.dto.UserLoginDto;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/login")
public class Login {

    @GetMapping
    public String login(Model model) {
        model.addAttribute("userLogin", new UserLoginDto());
        return "login";
    }

    // @PostMapping
    // public String login(
    //                      @ModelAttribute("userRegistration") 
    //                      @Valid UserRegistrationDto userRegistration,
    //                      BindingResult bindingResult,
    //                      Model model
    //                      )
    // {

    //     if (bindingResult.hasErrors()) {
    //         model.addAttribute("user", userRegistration);
    //         return "signup";
    //     }

    //     model.addAttribute("user", userRegistration);

    //     return "signup";
        
    // }
    
}
