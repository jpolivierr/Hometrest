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

@WebServlet(urlPatterns = "/similar_property")
@MultipartConfig
public class SimilarPropertyServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
    throws ServletException, IOException{


        String idParam = request.getParameter("prop_id");

        if(idParam == null){

            JsonHttpResponse.send(response, 409, "request error", null);

            return;
        }

        String url = "https://realty-in-us.p.rapidapi.com/properties/v3/list-similar-homes?property_id=" + idParam;

        Object rs = MakeRequest.get(url);

        JsonHttpResponse.send(response, 200, "Similar property api", rs);

    }

    
}
