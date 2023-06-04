package com.hometrest.api.loginUser;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hometrest.ApiResponse.ApiResponse;

import jakarta.servlet.http.HttpSession;



@RestController 
public class LoginController {

  @Autowired 
  LoginRepository loginRepository;
  ApiResponse responsePayload;


  @RequestMapping(path="/login", method = RequestMethod.POST)

  public ResponseEntity<String>  logUser(@RequestBody Login login, HttpSession session){

    login.validate();

    Boolean valid = loginRepository.logIn(login.getEmail(), login.getPassword());

    if(valid){

            String redirectUrl = "http://localhost:3000/home";

            URI location = URI.create(redirectUrl);
            return ResponseEntity.status(HttpStatus.FOUND)
                                 .header("Location", location.toString())
                                 .body("Redirecting to " + redirectUrl);

    }


    return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                         .body("Not Authorized");


  }
}
