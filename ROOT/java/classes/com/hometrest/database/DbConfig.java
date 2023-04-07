package com.hometrest.database;

import io.github.cdimascio.dotenv.Dotenv;

public class DbConfig {

    private final  Dotenv dotenv = Dotenv.load();
    private final  String DB_USERNAME = dotenv.get("DB_USERNAME");
    private final  String DB_PWD = dotenv.get("DB_PWD");
    private final  String DB_DRIVER = dotenv.get("DB_DRIVER");
    private final  String DB_URL = dotenv.get("DB_URL");

    private final  String DB_USER_TABLE = dotenv.get("DB_USER_TABLE");

    private static DbConfig instance;


    private DbConfig(){}

    public static synchronized DbConfig getConfig(){

        if(instance == null){
            instance = new DbConfig();
        }

        return instance;

    }

    public String getDB_USERNAME() {
        return DB_USERNAME;
    }

    public String getDB_PWD() {
        return DB_PWD;
    }

    public String getDB_DRIVER() {
        System.out.println(DB_DRIVER);
        return DB_DRIVER;
    }

    public String getDB_URL() {
        return DB_URL;
    }

    public String getDB_USER_TABLE() {
        return DB_USER_TABLE;
    }
    
}
