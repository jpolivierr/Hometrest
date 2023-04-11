package com.hometrest.database;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;

import jakarta.servlet.ServletResponse;

import java.sql.CallableStatement;

import com.hometrest.JsonResponse.JsonHttpResponse;
import com.hometrest.formSubmissions.LoginForm;

public class ValidateUser  {

    boolean result = false;

    public boolean init(ServletResponse response, Connection connection, LoginForm userInput){

        
        
        try {

            String sql = "{CALL validateUser(?, ?)}";

            CallableStatement cstmt = connection.prepareCall(sql);
            cstmt.setString(1,userInput.getEmail());
            cstmt.setString(2,userInput.getPassword());

            cstmt.execute();

            var rs = cstmt.executeQuery();
            
            var responseBody = new HashMap<String,String>();


            while(rs.next()){
                     
                         responseBody.put("first_name", rs.getString("first_name"));
                         responseBody.put("last_name", rs.getString("last_name"));
                         responseBody.put("email", rs.getString("last_name"));
                         responseBody.put("liked_id", Integer.toString(rs.getInt("liked_id")));
                         responseBody.put("url", rs.getString("url"));

            }

            
            
            if(responseBody.isEmpty()){

                responseBody.put("Email", "Your email or password is incorrect");
                JsonHttpResponse.send(response, 409,"error",responseBody );

            }else{

                // jsonHttpResponse.send(response, 200,"Success",responseBody );
                result = true;

            }
            


        } catch (SQLException e) {

            // TODO Auto-generated catch block
            System.out.println(e.getErrorCode());

                var error =new HashMap<String,String>();

                if(e.getErrorCode() == 0){
                    error.put("serverError", "Your email or password is incorrect");
                    JsonHttpResponse.send(response, 409,"Error", error);
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

        return result;

    }

    public String exc(){
       return "";
    }
    
}

