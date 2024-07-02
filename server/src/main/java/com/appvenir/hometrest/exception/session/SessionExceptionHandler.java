package com.appvenir.hometrest.exception.session;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.appvenir.hometrest.exception.ErrorResponse;

import jakarta.servlet.http.HttpServletRequest;

@ControllerAdvice
public class SessionExceptionHandler {

        @ExceptionHandler(value = {SessionExistException.class})
    public ResponseEntity<Object> handleSessionExistException(SessionExistException e, HttpServletRequest request) {

        ErrorResponse errorResponse = ErrorResponse.builder()
                                            .timestamp(LocalDateTime.now())
                                            .status(HttpStatus.CONFLICT.value())
                                            .error(e.getMessage())
                                            .message(e.getMessage())
                                            .path(request.getRequestURI())
                                            .build();

        return new ResponseEntity<>(errorResponse, HttpStatus.CONFLICT);
    }
    
}
