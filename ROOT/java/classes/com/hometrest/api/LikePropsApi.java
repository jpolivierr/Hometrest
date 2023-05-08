package com.hometrest.api;

import java.io.IOException;
import java.sql.Connection;
import java.util.HashMap;
import java.lang.reflect.Type;

import com.google.gson.Gson;
import com.hometrest.JsonHttpResponse;
import com.hometrest.database.DbConnect;
import com.hometrest.database.Db_FetchAccount;
import com.hometrest.database.Db_LikeProperty;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@WebServlet(urlPatterns = "/api/like_property")
@MultipartConfig
public class LikePropsApi extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
    throws ServletException, IOException{

            Gson gson = new Gson();

            String clientResponse = request.getParameter("formData");

            Type type = new com.google.gson.reflect.TypeToken<HashMap<String, String>>() {}.getType();

            HashMap<String, String> payload = gson.fromJson(clientResponse, type);

            HttpSession session = request.getSession(false);

            String email = (String) session.getAttribute("email");

            if(email != null){

                DbConnect dbConnect = DbConnect.getDbConnect();

                Connection connection = dbConnect.connect();

                Db_LikeProperty likeProperty = new Db_LikeProperty();

                Boolean account = likeProperty.init(connection, email, payload.get("propertyId"));

                if(account != true){

                HashMap<String,String> notFound = new HashMap<>();

                notFound.put("serverError", "User not found");

                JsonHttpResponse.send(response, 409,"User not found", notFound);

                  return ;
                }

                JsonHttpResponse.send(response, 200,"success", null);

                return;

            }

            HashMap<String,String> notFound = new HashMap<>();

            notFound.put("serverError", "Something went wrong");

            JsonHttpResponse.send(response, 409,"User not found", notFound);
        
    }

   
}
