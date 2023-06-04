package com.hometrest.api.userInfo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hometrest.ApiResponse.ApiResponse;
import com.hometrest.api.SessionManagement.SessionManagement;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController 
@RequestMapping(path="/") 
public class UserInfoController {

  @GetMapping(path="/secured/user")
  public ApiResponse  getAllUsers( HttpServletRequest request, HttpServletResponse response) {

     SessionManagement session = new SessionManagement(request, response);

    if(session.Valid()){

      String sesionAuthId = session.getAttribute("SESSION_AUTH_ID");

      // return responseBuilder.body("Session Id  = " + sesionAuthId + 
      //                             "</br> cookie name: " + cookieValue );
      String message = "Session Id  = " + sesionAuthId;

      return new ApiResponse(message);

    }else{

      session.create();

      return new ApiResponse("starting new session...");
    }

  }


}
