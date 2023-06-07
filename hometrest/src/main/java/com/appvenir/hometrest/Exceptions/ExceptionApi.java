package com.appvenir.hometrest.Exceptions;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

class ExceptionApi {

    private int status;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MM-dd-yyyy hh:mm:ss")
    private LocalDateTime timestamp;
    private String message;
    private String debugMessage;
    private Object errors;
 
 
    ExceptionApi (int status, String message) {
        this.timestamp = LocalDateTime.now();
        this.status = status;
        this.message = message;
    }

    ExceptionApi (int status, String message, Throwable ex) {
        this.timestamp = LocalDateTime.now();
        this.status = status;
        this.message = message;
        this.debugMessage = ex.getMessage();
    }

    ExceptionApi (int status, String message, Object errors) {
        this.timestamp = LocalDateTime.now();
        this.status = status;
        this.message = message;
        this.errors = errors;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getErrors() {
        return errors;
    }

    public int getStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }

    public String getDebugMessage() {
        return debugMessage;
    }
 }
