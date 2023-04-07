package com.hometrest.database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

public class DbConnect {

    DbConfig dbConfig = DbConfig.getConfig();
    private final String USER = dbConfig.getDB_USERNAME();
    private final String PWD = dbConfig.getDB_PWD();
    private final String DRIVER = dbConfig.getDB_DRIVER();
    private final String URL = dbConfig.getDB_URL();

    private DbConnect (){}

    private static DbConnect instance;
    private Connection connection;

    public static DbConnect getDbConnect (){

        if(instance == null){
            instance = new DbConnect();
        }

        return instance;

    }

    public Connection connect(){

        try {
            Class.forName(DRIVER);
            connection = DriverManager.getConnection(URL, USER, PWD);
            System.out.println("db connected..");
            
        } catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
        }

        return connection;
    }
    
}
