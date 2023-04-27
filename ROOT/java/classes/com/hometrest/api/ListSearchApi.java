package com.hometrest.api;

import java.io.IOException;

import com.hometrest.JsonHttpResponse;
import com.hometrest.makeRequest.MakeRequest;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = "/api/search")
@MultipartConfig
public class ListSearchApi extends HttpServlet{

    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
    throws ServletException, IOException{

        String clientResponse = request.getParameter("formData");


        String url = "https://realty-in-us.p.rapidapi.com/properties/v3/list";

        var rs = MakeRequest.post(url, clientResponse);

        JsonHttpResponse.send(response, 200, "check", rs);

    }

}
