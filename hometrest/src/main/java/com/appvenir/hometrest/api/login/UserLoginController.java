package com.appvenir.hometrest.api.login;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.appvenir.hometrest.Exceptions.UserNotFoundException;
import com.appvenir.hometrest.api.user.User;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/process-login")
public class UserLoginController {

        public UserLoginService userLoginService;

        public UserLoginController(UserLoginService userLoginService){

            this.userLoginService = userLoginService;

        }

        @ResponseStatus(HttpStatus.NO_CONTENT)
        @PostMapping(path = "")
        public void login(@Valid @RequestBody UserLogin userLogin, HttpSession session){

         if(session.isNew()){

            User user = userLoginService.authenticate(userLogin.getEmail(), userLogin.getPassword());
            session.setAttribute("email", user.getEmail());
            session.setMaxInactiveInterval(300);

         }else{

            System.out.println("===============================================");
            System.out.println(session.getId());
            System.out.println(session.getAttribute("email"));
            System.out.println("===============================================");

            throw new UserNotFoundException();

         }

        }
    
}
