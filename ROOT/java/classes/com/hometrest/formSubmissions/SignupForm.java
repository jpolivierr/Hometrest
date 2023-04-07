package com.hometrest.formSubmissions;

import java.util.HashMap;

public class SignupForm extends FormSubmission{

     private String name;
     private String email;
     private String password;
     private String password2;

     public HashMap<String,String> validate(){

        emailValidation("email",email);
        isEmpty("name", name);
        isEmpty("email", email);
        isEmpty("password", password);
        matchPassword("password2", password, password2); 
        return getResult();
        
     }


    
}
