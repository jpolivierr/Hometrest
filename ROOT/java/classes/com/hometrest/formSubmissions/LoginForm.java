package com.hometrest.formSubmissions;

import java.util.HashMap;

public class LoginForm extends FormSubmission{

     private String email;
     private String password;

     public HashMap<String,String> validate(){

        emailValidation("email",email);
        isEmpty("email", email);
        isEmpty("password", password);
        
        return getResult();
        
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
