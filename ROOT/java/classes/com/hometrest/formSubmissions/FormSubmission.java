package com.hometrest.formSubmissions;
import java.util.regex.Pattern;

import java.util.HashMap;

abstract class FormSubmission {

    HashMap<String,String> errors = new HashMap<>();

    protected void emailValidation(String key, String email){

        final String regexPattern = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@" 
        + "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";  

            if(email != null){

              var match = Pattern.compile(regexPattern).matcher(email).matches();
              if(!match){
                errors.put(key, key + " is not valid"); 
              }
              
            }
    }

    protected void isEmpty(String key, String value){

        if(value != null && value.isEmpty()){

            errors.put(key, key + " is required");

        }

        if(value == null){

            errors.put(key, key + " is required");

        }
    }

    protected void matchPassword(String key, String pwd1, String pwd2){

        if(pwd1 == null && pwd2 == null){

            errors.put(key,"Passwords do not match");

        }else if(!pwd1.equals(pwd2)){

            errors.put(key,"Passwords do not match");

        }else if(pwd1.equals("") || pwd2.equals("")){

            errors.put(key,"Passwords do not match");

        }

    }

    protected HashMap<String,String> getResult(){
        return errors;
    }

    protected abstract HashMap<String,String> validate();
    
}
