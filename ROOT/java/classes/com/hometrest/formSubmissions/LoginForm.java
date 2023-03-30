package com.hometrest.formSubmissions;

import java.util.HashMap;

public class LoginForm extends FormSubmission{

     private String name;
     private String email;
     private String password;

     public HashMap<String,String> validate(){

        emailValidation(email);
        isEmpty("name", name);
        isEmpty("email", email);
        isEmpty("password", password);
        
        return getResult();
        
     }


    
}
