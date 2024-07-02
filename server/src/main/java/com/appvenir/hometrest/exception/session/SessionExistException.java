package com.appvenir.hometrest.exception.session;

import org.springframework.web.bind.annotation.ControllerAdvice;

@ControllerAdvice
public class SessionExistException extends RuntimeException {
    
    public SessionExistException(){
        super("User already logged in");
    }

}
