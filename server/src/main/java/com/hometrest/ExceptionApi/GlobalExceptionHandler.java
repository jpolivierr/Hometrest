package com.hometrest.ExceptionApi;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@Order(Ordered.HIGHEST_PRECEDENCE)
@ControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(EmptyResultDataAccessException.class)
    protected ResponseEntity<Object> handleEmptyResultDataAccessException( EmptyResultDataAccessException e ){
        int statusCode = HttpStatus.NOT_FOUND.value();
        HttpStatus status = HttpStatus.valueOf(statusCode);
        ExceptionApi exception = new ExceptionApi(statusCode, "Either the email or password is incorrect", e);
        return new ResponseEntity<>(exception, status);
    }


    @ExceptionHandler(value = {Exception.class})
    public ResponseEntity<Object> handle500Error(Exception e) {
        int statusCode = HttpStatus.INTERNAL_SERVER_ERROR.value();
        HttpStatus status = HttpStatus.valueOf(statusCode);
        String message = "Internal Server Error";

        ExceptionApi exception = new ExceptionApi(statusCode, message, e);
        return new ResponseEntity<>(exception, status);
    }

    @ExceptionHandler(value = {UserNotFoundException.class})
    public ResponseEntity<Object> handleUserNotFoundException(Exception e) {
        int statusCode = HttpStatus.UNAUTHORIZED.value();
        HttpStatus status = HttpStatus.valueOf(statusCode);
        String message = "Either your email or password is incorrect";
        ExceptionApi exception = new ExceptionApi(statusCode, message, e);
        return new ResponseEntity<>(exception, status);
    }

    @ExceptionHandler(value = {FormValidationException.class})
    public ResponseEntity<Object> handleFormValidationException(FormValidationException e) {
        int statusCode = HttpStatus.BAD_REQUEST.value();
        HttpStatus status = HttpStatus.valueOf(statusCode);
        String message = "Invalid inputs";
        ExceptionApi exception = new ExceptionApi(statusCode, message, e.getError());
        return new ResponseEntity<>(exception, status);
    }



    

}
