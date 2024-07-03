package com.appvenir.hometrest.exception.realtyApiException;

import java.util.HashMap;

import lombok.Getter;

@Getter
public class RealtyApiException extends RuntimeException {

    private HashMap<String,String> errors;

    public RealtyApiException(HashMap<String,String> errors){
        this.errors = errors;
    }

    public RealtyApiException(String message){
        super(message);
    }
    
}
