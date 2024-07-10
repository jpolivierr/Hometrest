package com.appvenir.hometrest.web.exception;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.reactive.resource.NoResourceFoundException;

@ControllerAdvice(annotations = Controller.class)
@Order(Ordered.HIGHEST_PRECEDENCE)
public class MvcControllerExceptionHandler {

    @ExceptionHandler(value = {NoResourceFoundException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public String handleNotFoundException(NoResourceFoundException ex){
        return "404";
    }
    
}
