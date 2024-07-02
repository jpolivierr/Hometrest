package com.appvenir.hometrest.api.realty.service;

import java.util.concurrent.CompletableFuture;

import org.springframework.stereotype.Component;

import com.appvenir.hometrest.api.realty.RealtyApi;
import com.appvenir.hometrest.system.io.IO;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
@Getter
public class RealtyApiServiceProxy implements RealtyApi{

    private final RealtyApiService realtyApiService;

    public CompletableFuture<String> findPropertyById(String id){

        String currentPath = IO.currentPath("/api/realty/data/property.json");

        if(IO.fileExist(currentPath)){

            System.out.println("returned from cache");

            String fileContent = IO.getFileContent(currentPath);

            return CompletableFuture.completedFuture(fileContent);
    
        } else {

            CompletableFuture<String> property = realtyApiService.findPropertyById(id);

            property.thenAccept( (response) -> {

                IO.writeToFile(currentPath, response);

            });

            return property;
        }

    }

    @Override
    public CompletableFuture<String> findSimilarProperties(String id) {
        String currentPath = IO.currentPath("/api/realty/data/similarProperties.json");

        if(IO.fileExist(currentPath)){

            System.out.println("returned from cache");

            String fileContent = IO.getFileContent(currentPath);

            return CompletableFuture.completedFuture(fileContent);
    
        } else {

            CompletableFuture<String> property = realtyApiService.findSimilarProperties(id);

            property.thenAccept( (response) -> {

                IO.writeToFile(currentPath, response);

            });

            return property;
        }
    }

    @Override
    public CompletableFuture<String> findAll(Object propertySearch) {

        String currentPath = IO.currentPath("/api/realty/data/propertyList.json");

        if(IO.fileExist(currentPath)){

            System.out.println("returned from cache");

            String fileContent = IO.getFileContent(currentPath);

            return CompletableFuture.completedFuture(fileContent);
    
        } else {

            CompletableFuture<String> property = realtyApiService.findAll(propertySearch);

            property.thenAccept( (response) -> {

                IO.writeToFile(currentPath, response);

            });

            return property;
        }
        
    }

}
