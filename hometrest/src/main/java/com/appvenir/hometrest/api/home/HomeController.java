package com.appvenir.hometrest.api.home;

import java.security.Principal;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.appvenir.hometrest.Authentication.AuthUser;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/")
public class HomeController {

    // @PostMapping(path = "/process-login")
    //     public @ResponseBody String login(@RequestBody String requestBody){
            
    //         return "hi from process login";

    //     }
    // private final String HOME_VIEW_COUNT = "HOME_VIEW_COUNT";

    // @GetMapping(path = "")
    // public  @ResponseBody String home(Principal principal, Authentication authentication, HttpSession session){

   
    //     UserDetails userDetails = (AuthUser) authentication.getPrincipal();

    //     incrementCount(session,HOME_VIEW_COUNT);

    //     return "hello " + principal.getName() + "email: " + userDetails.getUsername();
    // }

    // @GetMapping(path = "/count")
    // public  @ResponseBody String count(HttpSession session){

    //     return "HOME_VIEW_COUNT " + session.getAttribute(HOME_VIEW_COUNT);
    // }

    // private void incrementCount(HttpSession session, String attr) {

    //     var homeViewCount = session.getAttribute(attr) == null ? 0 : (Integer) session.getAttribute(attr);
    //     session.setAttribute(attr, homeViewCount += 1);
    // }
    
    
}
