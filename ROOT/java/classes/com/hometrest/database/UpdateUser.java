package com.hometrest.database;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;

import com.hometrest.formSubmissions.FormSubmission;
import com.hometrest.formSubmissions.UpdateForm;



public class UpdateUser {

    HashMap<String,String> responseBody = new HashMap<String,String>();

    public HashMap<String,String> init(Connection connection, UpdateForm updateForm, String originalEmail){

        try {

            String sql = "{CALL updateUser(?,?,?,?)}";

            CallableStatement cstmt = connection.prepareCall(sql);

            cstmt.setString(1, originalEmail);

            cstmt.setString(2, updateForm.getEmail());

            cstmt.setString(3, updateForm.getFirstName());

            cstmt.setString(4, updateForm.getLastName());

            cstmt.execute();

            var rs = cstmt.executeQuery();

            while(rs.next()){
                     
                responseBody.put("first_name", rs.getString("first_name"));
                responseBody.put("last_name", rs.getString("last_name"));
                responseBody.put("email", rs.getString("email"));
                
                 }


            
        } catch (SQLException e) {

                var error =new HashMap<String,String>();

                if(e.getErrorCode() == 0){

                    error.put("serverError", "");

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
