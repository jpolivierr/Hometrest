package com.appvenir.hometrest.exception.makeRequest;

public class MakeRequestException extends RuntimeException{

    public MakeRequestException(String message){
        super(message);
    }

    public MakeRequestException(String message, Throwable cause) {
        super(message, cause);
    }
    
}
