package com.appvenir.hometrest.exception.mvc;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.reactive.resource.NoResourceFoundException;

import com.appvenir.hometrest.exception.user.UserNotFoundException;

@ControllerAdvice
@Order(Ordered.HIGHEST_PRECEDENCE)
public class MvcControllerExceptionHandler {

    @ExceptionHandler(value = {UserNotFoundException.class})
    public String handleUserNotFoundException(UserNotFoundException ex){
        return "redirect:/login?error=true&message=" + ex.getMessage();
    }

    @ExceptionHandler(value = {NoResourceFoundException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public String handleNotFoundException(NoResourceFoundException ex){
        return "404";
    }

    @ExceptionHandler(value = {Exception.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public String handleNotFoundException(Exception ex){
        return "500";
    }
    
}
