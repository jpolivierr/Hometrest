package com.hometrest.formSubmissions;

import java.util.HashMap;

public class SignupForm extends FormSubmission{

     private String first_name;
     private String last_name;
     private String email;
     private String password;
     private String password2;

     public HashMap<String,String> validate(){

        emailValidation("email",email);
        isEmpty("first_name", first_name);
        isEmpty("last_name", last_name);
        isEmpty("email", email);
        isEmpty("password", password);
        matchPassword("password2", password, password2); 
        return getResult();
        
     }

     public String getFirstName() {
      return first_name;
  }

  public String getLastName() {
      return last_name;
  }

   public String getEmail() {
         return email;
   }

   public String getPassword() {
         return password;
   }


    
}
