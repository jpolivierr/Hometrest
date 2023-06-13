package com.appvenir.hometrest.Exceptions;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@Order(Ordered.HIGHEST_PRECEDENCE)
@ControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(EmptyResultDataAccessException.class)
    protected ResponseEntity<Object> handleEmptyResultDataAccessException( EmptyResultDataAccessException e ){
        HttpStatus status = HttpStatus.NOT_FOUND;
        ExceptionApi exception = new ExceptionApi(status, "Either the email or password is incorrect", e);
        return new ResponseEntity<>(exception, status);
    }

    @ExceptionHandler(value = {UserNotFoundException.class})
    public ResponseEntity<Object> handleUserNotFoundException(Exception e) {
        HttpStatus status = HttpStatus.UNAUTHORIZED;
        String message = "Either your email or password is incorrect";
        ExceptionApi exception = new ExceptionApi(status, message, e);
        return new ResponseEntity<>(exception, status);
    }

    @ExceptionHandler(value = {AccessDeniedException.class})
    public ResponseEntity<Object> handleAccessDeniedException(Exception e) {
        HttpStatus status = HttpStatus.UNAUTHORIZED;
        String message = e.getMessage();
        ExceptionApi exception = new ExceptionApi(status, message);
        return new ResponseEntity<>(exception, status);
    }

    @ExceptionHandler(value = {SessionExistException.class})
    public ResponseEntity<Object> handleSessionExistException(Exception e) {
        HttpStatus status = HttpStatus.CONFLICT;
        String message = "User already logged in";
        ExceptionApi exception = new ExceptionApi(status, message, e);
        return new ResponseEntity<>(exception, status);
    }


        @ExceptionHandler(value = {DataAccessException.class})
    public ResponseEntity<Object> handleDataAccess(DataAccessException e) {

        HttpStatus status = HttpStatus.UNPROCESSABLE_ENTITY;

        SQLException sqlEx = (SQLException) e.getRootCause();
        int sqlErrorCode = sqlEx.getErrorCode();

        String message = e.getRootCause().getMessage();

        switch(sqlErrorCode){

            case 1062 :
                status = HttpStatus.UNPROCESSABLE_ENTITY;
                message = "Email already exist";
                break;

        }
        
        System.out.println(e.getCause().getMessage());

        ExceptionApi exception = new ExceptionApi(status, message);
        return new ResponseEntity<>(exception, status);
    }


        @ExceptionHandler(MethodArgumentNotValidException.class)
        public ResponseEntity<Object> handleValidationExceptions(
        MethodArgumentNotValidException ex) {

            Map<String, String> errors = new HashMap<>();
            
            ex.getBindingResult().getAllErrors().forEach((error) -> {

                String fieldName = ((FieldError) error).getField();

                String errorMessage = error.getDefaultMessage();

                errors.put(fieldName, errorMessage);
            });

            ExceptionApi exception = new ExceptionApi(HttpStatus.BAD_REQUEST, "Field error", errors);

            return new ResponseEntity<>(exception, HttpStatus.BAD_REQUEST);
        }


        // @ExceptionHandler(value = {Exception.class})
        // public ResponseEntity<Object> handle500Error(Exception e) {

        //     HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        //     String message = "Something went wrong on our end. Please try again later.";
    
        //     System.out.println(e.getCause().getMessage());
    
        //     ExceptionApi exception = new ExceptionApi(status, message, e);

        //     return new ResponseEntity<>(exception, status);

        // }

    


}
