package com.appvenir.hometrest.exception.realtyApiException;


import lombok.Getter;

@Getter
public class RealtyApiException extends RuntimeException {

    private int status = 0;
    private Object data;

    public RealtyApiException(String message){
        super(message);
    }

    public RealtyApiException(String message, int status){
        super(message);
        this.status = status;
    }

    public RealtyApiException(String message, int status, Object data){
        super(message);
        this.status = status;
        this.data = data;
    }
    
}
