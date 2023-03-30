package com.hometrest.formSubmissions;

import java.util.HashMap;

abstract class FormSubmission {

    HashMap<String,String> errors = new HashMap<>();

    protected void emailValidation(String key, String email){

            if(email != null && !email.contains("@")){

              errors.put(key, key + ": not a valid email"); 

            }
          
    }

    protected void isEmpty(String key, String value){

        if(value != null && value.isEmpty()){

            errors.put(key, key + ": is required");

        }
        
    }

    protected HashMap<String,String> getResult(){
        return errors;
    }

    protected abstract HashMap<String,String> validate();
    
}
