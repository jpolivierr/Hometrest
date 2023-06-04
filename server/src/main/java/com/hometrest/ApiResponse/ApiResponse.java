package com.hometrest.ApiResponse;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.annotation.JsonFormat;

public class ApiResponse {
    private int status;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    private LocalDateTime timestamp;
    private String message;
    private Object body;
    

    public ApiResponse (String message) {
        this.status = HttpStatus.OK.value();
        this.timestamp = LocalDateTime.now();
        this.message = message;
    }


    public ApiResponse (String message, Object body) {
        this.status = HttpStatus.OK.value();
        this.timestamp = LocalDateTime.now();
        this.message = message;
        this.body = body;
    }

    public ApiResponse (int status, String message, Object body) {
        this.status = status;
        this.timestamp = LocalDateTime.now();
        this.message = message;
        this.body = body;
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
