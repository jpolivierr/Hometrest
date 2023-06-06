package com.appvenir.hometrest.ApiResponse;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonFormat;

@Component
public class ApiResponse {
    private int status;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    private LocalDateTime timestamp;
    private String message;
    private Object body;

    // public ApiResponse (int status, String message, Object body) {
    //     this.status = status;
    //     this.timestamp = LocalDateTime.now();
    //     this.message = message;
    //     this.body = body;
    // }

    public ApiResponse create(int status, String message, Object body){

        this.timestamp = LocalDateTime.now();
        this.status = status;
        this.message = message;
        this.body = body;

        return this;

    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setBody(Object body) {
        this.body = body;
    }

    public Object getBody() {
        return body;
    }
    
    public int getStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }
}
