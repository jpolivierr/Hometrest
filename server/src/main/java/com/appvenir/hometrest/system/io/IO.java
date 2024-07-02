package com.appvenir.hometrest.system.io;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;



public class IO {

    public static final String workingDir = System.getProperty("user.dir");
    public static final String projectDir = workingDir + "/src/main/java/com/appvenir/hometrest";

    public static void writeToFile(String filePath, String content){

        Path path = Paths.get(filePath);

        createFile(filePath);

        try(BufferedWriter writer = Files.newBufferedWriter(path, StandardOpenOption.WRITE)) {
          
            writer.write(content);
            
        } catch (Exception e) {
            
        }

    }

    public static void createFile(String filePath){

        Path path = Paths.get(filePath);

        try {          

            if (!Files.exists(path)) {

                Files.createFile(path);
            }
        
        } catch (Exception e) {
            e.printStackTrace();
        }
        
    }

    public static String getFileContent(String filePath){

        Path path = Paths.get(filePath);

        try(BufferedReader reader = Files.newBufferedReader(path)) {

            if(!fileExist(filePath)){

                throw new FileNotFoundException();

            }

            String line;

            var strinBuilder = new StringBuilder();

            while((line = reader.readLine()) != null){

                 strinBuilder.append(line);

            }

            return strinBuilder.toString();
            
        } catch (Exception e) {

            e.printStackTrace();

            return "";

        }

    }

    public static String currentPath(String filePath){
        return projectDir + filePath;
    }
    
    public static boolean fileExist(String filePath){

        try {          

           Path path = Paths.get(filePath);
           return Files.exists(path);
        
        } catch (Exception e) {
            e.printStackTrace();
        }

        return false;

    } 
}
