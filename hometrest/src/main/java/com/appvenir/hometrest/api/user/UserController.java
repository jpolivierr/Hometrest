package com.appvenir.hometrest.api.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.appvenir.hometrest.ApiResponse.ApiResponse;

@RestController 
@RequestMapping(path="/") 
public class UserController {

  private final UserService userService;
  private final ApiResponse apiResponse;

  @Autowired
  public UserController(UserService userService, ApiResponse apiResponse) {
      this.userService = userService;
      this.apiResponse = apiResponse;
  }

  // Find user by email
  @GetMapping(path="/user")
  public ResponseEntity<Object> findByEmail() {
     User user = userService.findByEmail("jp@gmail.com");
    return apiResponse.create(200, "success", user);
  }


  // Create a new user
  @ResponseStatus(HttpStatus.CREATED)
  @PostMapping(path="/user")
  public void create(@RequestBody User user) {
    
    userService.saveUser(user);
  
  }

   // Update user
   @ResponseStatus(HttpStatus.CREATED)
   @PutMapping(path="/user")
   public void update(@RequestBody User user) {
     userService.updateUser(user, "jp@gmail.com");
   }

   // delete user
   @ResponseStatus(HttpStatus.NO_CONTENT)
   @DeleteMapping(path="/user")
   public void delete() {
     userService.deleteByEmail("jp@gmail.com");
   }



}
