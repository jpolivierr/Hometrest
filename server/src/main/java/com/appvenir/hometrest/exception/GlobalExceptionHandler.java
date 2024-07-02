package com.appvenir.hometrest.exception;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


import jakarta.servlet.http.HttpServletRequest;

@ControllerAdvice
public class GlobalExceptionHandler {


        @ExceptionHandler(MethodArgumentNotValidException.class)
        public ResponseEntity<Object> handleValidationExceptions(
MethodArgumentNotValidException e, HttpServletRequest request) {

            Map<String, String> errors = new HashMap<>();
            
            e.getBindingResult().getAllErrors().forEach((error) -> {

                String fieldName = ((FieldError) error).getField();

                String errorMessage = error.getDefaultMessage();

                errors.put(fieldName, errorMessage);
            });

            ErrorResponse errorResponse = ErrorResponse.builder()
                                            .timestamp(LocalDateTime.now())
                                            .status(HttpStatus.NOT_FOUND.value())
                                            .error(e.getMessage())
                                            .message(e.getMessage())
                                            .path(request.getRequestURI())
                                            .data(errors)
                                            .build();
        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }

    


}
