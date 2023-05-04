package com.hometrest.database;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;


public class Db_DeleteAccount {

    public Boolean init(Connection connection, String email){

        boolean result = false;
        
        try {


            String sql = "{CALL deleteUser(?)}";

            CallableStatement cstmt = connection.prepareCall(sql);

            cstmt.setString(1, email);

            cstmt.execute();

            ResultSet rs = cstmt.getResultSet();
            

            while(rs.next()){

                if(rs.getBoolean("result")){

                result = true;

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


        return result;
    }
    
}
