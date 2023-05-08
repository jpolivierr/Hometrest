package com.hometrest.database;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;



public class Db_LikeProperty {

    Boolean responseBody = false;

    public Boolean init(Connection connection, String email, String id){

        try {

            String sql = "{CALL addLikedProperties(?,?)}";

            CallableStatement cstmt = connection.prepareCall(sql);

            cstmt.setString(1, email);

            cstmt.setString(2, id);

            cstmt.execute();

            var rs = cstmt.getResultSet();
            
            while(rs.next()){

                Boolean property_id = rs.getBoolean("result");

                if(property_id){

                    responseBody = true;

                }

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
