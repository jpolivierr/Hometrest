package com.appvenir.hometrest.api.realty.service;

import org.springframework.stereotype.Component;

import com.appvenir.hometrest.api.realty.RealtyApi;
import com.appvenir.hometrest.system.io.IO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.Getter;

@Component
@Getter
public class RealtyApiServiceProxy implements RealtyApi{

    private final ObjectMapper objectMapper;

    public RealtyApiServiceProxy(ObjectMapper objectMapper){
        this.objectMapper = new ObjectMapper();
    }

    @Override
    public Object findPropertyById(String id){

        String currentPath = IO.currentPath("/api/realty/data/property.json");

        if(IO.fileExist(currentPath)){

            System.out.println("returned from cache");

            String fileContent = IO.getFileContent(currentPath);

            try {
                return objectMapper.readValue(fileContent, Object.class);
            } catch (JsonProcessingException e) {
                e.printStackTrace();
                return "";
            }
    
        }

        return "";

    }

    @Override
    public Object findPropertyList(String propertySearch) {

        String currentPath = IO.currentPath("/api/realty/data/propertyList.json");

        if(IO.fileExist(currentPath)){

            System.out.println("returned from cache");

            String fileContent = IO.getFileContent(currentPath);

            try {
                return objectMapper.readValue(fileContent, Object.class);
            } catch (JsonProcessingException e) {
                e.printStackTrace();
                return "";
            }
    
        }
        
        return "";
    }
  

}
