package com.appvenir.hometrest.exception.realtyApiException;

import java.time.LocalDateTime;
import java.util.HashMap;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

import com.appvenir.hometrest.exception.ErrorResponse;

import jakarta.servlet.http.HttpServletRequest;

@Order(Ordered.HIGHEST_PRECEDENCE)
@ControllerAdvice(annotations = RestController.class)
public class RealtyApiExceptionHandler {

    @ExceptionHandler(RealtyApiException.class)
    public ResponseEntity<Object> handleRealtyApiException(RealtyApiException ex, HttpServletRequest request){

        HashMap<String,String> errors = ex.getErrors();
        int errorStatus = Integer.parseInt(errors.get("errorCode"));

        ErrorResponse errorResponse = ErrorResponse.builder()
                                            .timestamp(LocalDateTime.now())
                                            .status(errorStatus)
                                            .error(errors.get("message"))
                                            .message(errors.get("message"))
                                            .path(request.getRequestURI())
                                            .data(errors)
                                            .build();

        return new ResponseEntity<>(errorResponse, HttpStatusCode.valueOf(errorStatus));

    }
    
}
