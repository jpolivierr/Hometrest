package com.hometrest.servlet;

import java.io.IOException;

import com.google.gson.Gson;
import com.hometrest.JsonResponse.JsonHttpResponse;
import com.hometrest.makeRequest.MakeRequest;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = "/search")
@MultipartConfig
public class SearchServlet extends HttpServlet{

    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
    throws ServletException, IOException{

        response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        response.setHeader("Access-Control-Allow-Credentials", "true");



        String clientResponse = request.getParameter("formData");

        

        var rs = MakeRequest.get("https://jsonplaceholder.typicode.com/posts/1");
        JsonHttpResponse.send(response, 200, "here", rs);

    }

}
