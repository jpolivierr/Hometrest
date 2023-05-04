package com.hometrest.formSubmissions;

import java.util.HashMap;

public class UpdateForm extends FormSubmission{

     private String first_name;
     private String last_name;
     private String email;

     public HashMap<String,String> validate(){

        emailValidation("email",email);
        isEmpty("first_name", first_name);
        isEmpty("last_name", last_name);
        isEmpty("email", email); 
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



    
}
