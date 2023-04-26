package com.hometrest.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import com.hometrest.JsonHttpResponse;
import com.hometrest.makeRequest.MakeRequest;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = "/listings")
@MultipartConfig
public class ListingsServlet extends HttpServlet{

    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
    throws ServletException, IOException{

    RequestDispatcher dispatcher = request.getRequestDispatcher("index.html");

    dispatcher.forward(request, response);

    }

}
