package com.appvenir.hometrest.web.pages;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.appvenir.hometrest.domain.user.dto.UserLoginDto;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/login")
public class Login {

    private String title;
    private AuthenticationManager authenticationManager;

    public Login(){
        this.title = "Login";
    }

    @GetMapping
    public String login(
            @ModelAttribute("userLogin")
            @Valid UserLoginDto userLoginDto,
            BindingResult bindingResult,
            Model model
            ) 
    {
        model.addAttribute("title", title);
        model.addAttribute("userLogin", new UserLoginDto());
        return "login";
    }

}
    

