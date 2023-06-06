package com.appvenir.hometrest.api.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController 
@RequestMapping(path="/") 
public class UserController {

  private final UserService userService;

  @Autowired
  public UserController(UserService userService) {
      this.userService = userService;
  }


  @GetMapping(path="/user")
  public String getAllUsers( HttpServletRequest request, HttpServletResponse response) {
    
    userService.saveUser(new User("frederic", "olivier", "jp@gmail.com", "c"));
    return "hello";
  }



}
