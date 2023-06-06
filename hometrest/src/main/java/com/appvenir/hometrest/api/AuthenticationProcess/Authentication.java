package com.appvenir.hometrest.api.AuthenticationProcess;

import com.appvenir.hometrest.ExceptionApi.FormValidationException;
import com.appvenir.hometrest.formValidation.FormValidation;

public class Authentication extends FormValidation {

    private String email;
    private String password;

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean validate(){

        boolean validated = false;

       emailValidation("email",email);
       isEmpty("email", email);
       isEmpty("password", password);
       
       if(!getResult().isEmpty()){

        throw new FormValidationException(getResult());

       }else{

         validated = true;

       }

       return validated;
       
    }

    
}
