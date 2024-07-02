package com.appvenir.hometrest.exception.user;


import org.springframework.web.bind.annotation.ControllerAdvice;

@ControllerAdvice
public class UserNotFoundException extends RuntimeException{    

    public UserNotFoundException(){
        super("Either your email or password is incorrect");
    }

}
