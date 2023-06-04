package com.hometrest.api.loginUser;

import com.hometrest.ExceptionApi.FormValidationException;
import com.hometrest.api.formValidation.FormValidation;

public class Login extends FormValidation {

    private String email;
    private String password;

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

    
}
