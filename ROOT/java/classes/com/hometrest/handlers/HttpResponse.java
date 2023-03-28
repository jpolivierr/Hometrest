package com.hometrest.handlers;

import java.io.*; 
import jakarta.servlet.ServletResponse;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class HttpResponse {

    private int status;
    private String message;
    private Object body;

    public void send(ServletResponse response, int status, String message, Object body){

        response.setContentType("application/json");

        this.status = status;
        this.message = message;
        this.body = body;

        Gson gson = new GsonBuilder().setPrettyPrinting().create();

        String Json = gson.toJson(this);

        try {

            PrintWriter out = response.getWriter();

            out.print(Json);

        } catch (IOException e) {

            e.printStackTrace();

        }
    }
    
}
