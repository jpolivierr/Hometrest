package com.appvenir.hometrest.exception.realtyApiException;

import java.time.LocalDateTime;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity<Object> handleRealtyApiException(RealtyApiException e, HttpServletRequest request){

        int apiStatus = e.getStatus() == 0 ? HttpStatus.BAD_REQUEST.value() : e.getStatus();

        ErrorResponse errorResponse = ErrorResponse.builder()
                                            .timestamp(LocalDateTime.now())
                                            .status(apiStatus)
                                            .error(e.getCause() != null ? e.getCause().getMessage() : null)
                                            .message(e.getMessage())
                                            .path(request.getRequestURI())
                                            .data(e.getData())
                                            .build();

        return new ResponseEntity<>(errorResponse, HttpStatusCode.valueOf(apiStatus));

    }
    
}
