package com.hometrest.api;

import java.io.IOException;
// import java.io.PrintWriter;
import java.util.HashMap;
import java.util.UUID;

import com.google.gson.Gson;
import com.hometrest.JsonHttpResponse;
import com.hometrest.MySessionManagement;
import com.hometrest.database.CreateUser;
import com.hometrest.database.DbConnect;
import com.hometrest.database.UpdateUser;
import com.hometrest.formSubmissions.UpdateForm;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
// import jakarta.servlet.http.HttpSession;
import jakarta.servlet.http.HttpSession;

@WebServlet(urlPatterns = "/api/updated_account")
@MultipartConfig
public class UpdateAccount extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
    throws ServletException, IOException{

        String clientResponse = request.getParameter("formData");
        
        //Validate form
        Gson gson = new Gson();

        UpdateForm updateForm = gson.fromJson(clientResponse, UpdateForm.class);

        var result = updateForm.validate();

        if(result.isEmpty()){

            HttpSession session = request.getSession(false);

            String userEmail = (String) session.getAttribute("email");

            var dbConnect = DbConnect.getDbConnect();

            var connection = dbConnect.connect();

            UpdateUser updateUser = new UpdateUser();

            HashMap<String,String> account = updateUser.init(connection, updateForm, userEmail);

            if(account.isEmpty()){

                HashMap<String,String> notFound = new HashMap<>();

                notFound.put("serverError", "Something went wrong");

                JsonHttpResponse.send(response, 409,"Something went wrong", notFound);

                return ;
             }

             JsonHttpResponse.send(response, 200,"User updated", account);

        }else{

             JsonHttpResponse.send(response, 409,"Something went wrong", result);
            
        }

        

    }
    
}
