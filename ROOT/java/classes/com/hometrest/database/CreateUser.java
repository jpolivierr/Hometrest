package com.hometrest.database;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;

import com.hometrest.handlers.JsonHttpResponse;

import jakarta.servlet.ServletResponse;

import java.sql.CallableStatement;

import com.hometrest.formSubmissions.SignupForm;

public class CreateUser extends DbMethods<String>  {
     

    public void init(ServletResponse response, Connection connection, SignupForm userInput){

        
        try {

            String sql = "{CALL createUser(?, ?, ?, ?, ?)}";

            CallableStatement sctmt = connection.prepareCall(sql);

            sctmt.setString(1, userInput.getFirstName());
            sctmt.setString(2,userInput.getLastName());
            sctmt.setString(3,userInput.getEmail());
            sctmt.setString(4,userInput.getPassword());

           sctmt.execute();

           JsonHttpResponse.send(response, 200,"success", null);


        } catch (SQLException e) {

            // TODO Auto-generated catch block
            System.out.println(e.getErrorCode());

            if(e.getErrorCode() == 1062){

                var error =new HashMap<String,String>();

                error.put("email","Email already exist");
                JsonHttpResponse.send(response, 409,"Error", error);
            }
            System.out.println(e.getMessage());
            System.out.println(e.getClass());
            e.printStackTrace();

        }
        finally{
            
            try {
                
                connection.close();

            } catch (SQLException e) {
                
                e.printStackTrace();
            }
        }
        

    }

    public String exc(){
       return "";
    }
    
}
