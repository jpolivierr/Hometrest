package com.hometrest.formSubmissions;

import java.util.HashMap;

abstract class FormSubmission {

    HashMap<String,String> errors = new HashMap<>();

    protected void emailValidation(String email){

            if(email != null && !email.contains("@")){

              errors.put("email", "not a valid email"); 

            }
          
    }

    protected void isEmpty(String key, String value){

        if(value != null && value.isEmpty()){

            errors.put(key, "Is required");

        }
        
    }

    protected HashMap<String,String> getResult(){
        return errors;
    }

    protected abstract HashMap<String,String> validate();
    
}
