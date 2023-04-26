package com.hometrest.servlet;

import java.io.IOException;

import com.hometrest.JsonHttpResponse;
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

        String clientResponse = request.getParameter("formData");


        String url = "https://realty-in-us.p.rapidapi.com/properties/v3/list";

        var rs = MakeRequest.post(url, clientResponse);

        JsonHttpResponse.send(response, 200, "check", rs);

    }

}
