package com.hometrest.database;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;



public class Db_FetchAccount {

    HashMap<String,Object> responseBody = new HashMap<String,Object>();

    public HashMap<String,Object> init(Connection connection, String email){

        try {

            String sql = "{CALL getUser(?)}";

            CallableStatement cstmt = connection.prepareCall(sql);

            cstmt.setString(1, email);

            cstmt.execute();

            var rs = cstmt.getResultSet();

            ArrayList<String> propertyIdList = new ArrayList<>();
            
            while(rs.next()){

                String property_id = rs.getString("property_id");


                if(!responseBody.containsKey("first_name")){

                    responseBody.put("first_name", rs.getString("first_name"));

                }

                if(!responseBody.containsKey("last_name")){

                    responseBody.put("last_name", rs.getString("last_name"));
                    
                }

                if(!responseBody.containsKey("email")){

                    responseBody.put("email", rs.getString("email"));
                    
                }
                     

                if(!propertyIdList.contains(property_id) && property_id != null){

                    propertyIdList.add(property_id);

                }

                responseBody.put("likes", propertyIdList);

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
