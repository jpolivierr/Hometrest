package com.hometrest.handlers;

import java.io.*;
import java.util.HashMap;

import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class JsonHttpResponse {


    public static void send(ServletResponse response, int status, String message, Object body){

        

        var sendResponse = (HttpServletResponse) response;
        sendResponse.setContentType("application/json");

        HashMap<String,Object> result = new HashMap<>();
        result.put("status", status);
        result.put("message", message);
        result.put("body", body);

        Gson gson = new GsonBuilder().setPrettyPrinting().create();

        String Json = gson.toJson(result);

        try {

            sendResponse.setStatus(status);
            
            PrintWriter out = response.getWriter();

            out.print(Json);

        } catch (IOException e) {

            e.printStackTrace();

        }
    }
    
}
