package com.hometrest.database;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;

import java.sql.CallableStatement;

import com.hometrest.formSubmissions.LoginForm;

public class ValidateUser  {

    HashMap<String,String> responseBody = new HashMap<String,String>();

    public HashMap<String,String> init(Connection connection, LoginForm userInput){

        try {

            String sql = "{CALL validateUser(?, ?)}";

            CallableStatement cstmt = connection.prepareCall(sql);
            cstmt.setString(1,userInput.getEmail());
            cstmt.setString(2,userInput.getPassword());

            cstmt.execute();

            var rs = cstmt.executeQuery();

            while(rs.next()){
                     
                         responseBody.put("first_name", rs.getString("first_name"));
                         responseBody.put("last_name", rs.getString("last_name"));
                         responseBody.put("email", rs.getString("last_name"));
                         responseBody.put("liked_id", Integer.toString(rs.getInt("liked_id")));
                         responseBody.put("url", rs.getString("url"));

            }


        } catch (SQLException e) {

            // TODO Auto-generated catch block

                var error =new HashMap<String,String>();

                if(e.getErrorCode() == 0){

                    error.put("serverError", "Your email or password is incorrect");

                }

                e.printStackTrace();

        }
        finally{

            try {

                connection.close();

            } catch (SQLException e) {
                
                e.printStackTrace();
            }
            
        }

        return responseBody;

    }

    
}

