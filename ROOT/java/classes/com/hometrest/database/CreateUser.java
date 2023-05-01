package com.hometrest.database;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;

import java.sql.CallableStatement;

import com.hometrest.formSubmissions.SignupForm;

public class CreateUser  {
     
    public boolean init(Connection connection, SignupForm userInput){

        boolean result = false;

        try {

            String sql = "{CALL addUser(?, ?, ?, ?)}";

            CallableStatement cstmt = connection.prepareCall(sql);

            cstmt.setString(1, userInput.getFirstName());
            cstmt.setString(2,userInput.getLastName());
            cstmt.setString(3,userInput.getEmail());
            cstmt.setString(4,userInput.getPassword());

           cstmt.execute();

           ResultSet rs = cstmt.getResultSet();

           while(rs.next()){

            if(rs.getBoolean("result")){

                result = true;

            }


           }



        } catch (SQLException e) {

            // TODO Auto-generated catch block
            System.out.println(e.getErrorCode());

            if(e.getErrorCode() == 1062){

                var error =new HashMap<String,String>();

                error.put("email","Email already exist");
                
            }

        }
        finally{
            
            try {
                
                connection.close();

            } catch (SQLException e) {
                
                e.printStackTrace();
            }
        }
        
        return result;
    }


    
}
