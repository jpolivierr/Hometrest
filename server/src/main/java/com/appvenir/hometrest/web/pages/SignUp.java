package com.appvenir.hometrest.web.pages;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.appvenir.hometrest.domain.user.dto.UserRegistrationDto;
import com.appvenir.hometrest.domain.user.service.UserService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("/signup")
@RequiredArgsConstructor
public class SignUp {

    private final UserService userService;

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
        model.addAttribute("user", userRegistration);

        if (bindingResult.hasErrors()) {
            return "signup";
        }

        if(userService.userExist(userRegistration.getEmail())) {
            bindingResult.rejectValue("email", "error.userRegistration", "Email already exists");
            return "signup";
        }

        userService.saveUser(userRegistration);

        return "login";
        
    }
    
}
