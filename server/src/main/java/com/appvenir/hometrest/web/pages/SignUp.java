package com.appvenir.hometrest.web.pages;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.appvenir.hometrest.domain.user.dto.UserRegistrationDto;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/signup")
public class SignUp {

    @GetMapping
    public String signup(Model model) {
        model.addAttribute("userRegistration", new UserRegistrationDto());
        return "signup";
    }

    @PostMapping
    public String signup(
                        @ModelAttribute("userRegistration") 
                         @Valid UserRegistrationDto userRegistration,
                         BindingResult bindingResult,
                         Model model
                         )
    {

        if (bindingResult.hasErrors()) {
            model.addAttribute("user", userRegistration);
            return "signup";
        }

        model.addAttribute("user", userRegistration);

        return "signup";
        
    }
    
}
