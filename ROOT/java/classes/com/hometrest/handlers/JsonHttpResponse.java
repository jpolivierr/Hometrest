package com.hometrest.handlers;

import java.io.*; 
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class JsonHttpResponse {

    public static int status;
    public static String message;
    public static Object body;

    public static void send(ServletResponse response, int status, String message, Object body){

        
        var sendResponse = (HttpServletResponse) response;
        sendResponse.setContentType("application/json");
        
        JsonHttpResponse.status = status;
        JsonHttpResponse.message = message;
        JsonHttpResponse.body = body;

        Gson gson = new GsonBuilder().setPrettyPrinting().create();

        String Json = gson.toJson(JsonHttpResponse.class);

        try {
            sendResponse.setStatus(status);
            PrintWriter out = response.getWriter();

            out.print(Json);

        } catch (IOException e) {

            e.printStackTrace();

        }
    }
    
}
