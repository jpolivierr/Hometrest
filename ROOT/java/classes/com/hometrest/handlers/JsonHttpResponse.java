package com.hometrest.handlers;

import java.io.*; 
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class JsonHttpResponse {

    public int status;
    public String message;
    public Object body;

    public void send(ServletResponse response, int status, String message, Object body){

        var sendResponse = (HttpServletResponse) response;
        sendResponse.setContentType("application/json");
        
        this.status = status;
        this.message = message;
        this.body = body;

        Gson gson = new GsonBuilder().setPrettyPrinting().create();

        String Json = gson.toJson(this);

        try {
            sendResponse.setStatus(status);
            PrintWriter out = response.getWriter();

            out.print(Json);

        } catch (IOException e) {

            e.printStackTrace();

        }
    }
    
}
