package com.appvenir.hometrest.exception.dataSource;

import java.time.LocalDateTime;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
// import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.appvenir.hometrest.exception.ErrorResponse;

import jakarta.servlet.http.HttpServletRequest;

@Order(Ordered.HIGHEST_PRECEDENCE)
@ControllerAdvice
public class DataSourceExceptionHandler {

    // @ExceptionHandler(value = {AccessDeniedException.class})
    // public ResponseEntity<Object> handleAccessDeniedException(AccessDeniedException e, HttpServletRequest request) {
    //     ErrorResponse errorResponse = ErrorResponse.builder()
    //                                         .timestamp(LocalDateTime.now())
    //                                         .status(HttpStatus.UNAUTHORIZED.value())
    //                                         .error(e.getCause() != null ? e.getCause().getMessage() : null)
    //                                         .message(e.getMessage())
    //                                         .path(request.getRequestURI())
    //                                         .data(e.getCause())
    //                                         .build();
    //     return new ResponseEntity<>(errorResponse, HttpStatus.UNAUTHORIZED);
    // }

    // @ExceptionHandler(EmptyResultDataAccessException.class)
    // protected ResponseEntity<Object> handleEmptyResultDataAccessException( EmptyResultDataAccessException e, HttpServletRequest request ){
    // ErrorResponse errorResponse = ErrorResponse.builder()
    //                                         .timestamp(LocalDateTime.now())
    //                                         .status(HttpStatus.NOT_FOUND.value())
    //                                         .error(e.getCause() != null ? e.getCause().getMessage() : null)
    //                                         .message(e.getMessage())
    //                                         .path(request.getRequestURI())
    //                                         .data(e.getCause())
    //                                         .build();
    //     return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    // }

    
}
