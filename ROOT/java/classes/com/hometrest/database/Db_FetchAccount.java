package com.hometrest.database;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;



public class Db_FetchAccount {

    HashMap<String,String> responseBody = new HashMap<String,String>();

    public HashMap<String,String> init(Connection connection, String email){

        try {

            String sql = "{CALL getUser(?)}";

            CallableStatement cstmt = connection.prepareCall(sql);

            cstmt.setString(1, email);

            cstmt.execute();

            var rs = cstmt.executeQuery();

            while(rs.next()){
                     
                responseBody.put("first_name", rs.getString("first_name"));
                responseBody.put("last_name", rs.getString("last_name"));
                responseBody.put("email", rs.getString("email"));
                responseBody.put("liked_id", Integer.toString(rs.getInt("liked_id")));
                responseBody.put("url", rs.getString("url"));

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
