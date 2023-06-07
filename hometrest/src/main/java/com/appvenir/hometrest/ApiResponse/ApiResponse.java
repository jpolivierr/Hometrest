package com.appvenir.hometrest.ApiResponse;

import java.time.LocalDateTime;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonFormat;

@Component
public class ApiResponse {
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    private LocalDateTime timestamp;
    private String message;
    private Object body;

    public ResponseEntity<Object>  create(int status, String message, Object body){

        this.timestamp = LocalDateTime.now();
        this.message = message;
        this.body = body;

        return ResponseEntity.status(status)
                            .body(this);

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
    

    public String getMessage() {
        return message;
    }
}
