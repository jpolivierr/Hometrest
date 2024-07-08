package com.appvenir.hometrest.exception.user;

public class EmailExistException extends RuntimeException {

    public EmailExistException(){
        super("This email is already registred");
    }
    
}
