package com.appvenir.hometrest.api.user;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.appvenir.hometrest.ApiResponse.ApiResponse;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Controller
@RequestMapping(path="/api/v1/user")
public class UserController {

    private ApiResponse apiResponse;
    private UserService userService;

    UserController(
                    ApiResponse apiResponse,
                    UserService userService){
        this.apiResponse = apiResponse;
        this.userService = userService;
    }

    // Create a new user
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(path="")
    public void addNewUser(@Valid @RequestBody User user){
        userService.createUser(user);
    }

    // Update user
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping(path="")
    public void updateUser(@RequestBody User user){
        userService.updateUser(user);
    }

    // Find user
    @GetMapping(path="")
    public ResponseEntity<Object> findUser(){

        User userFound = userService.findUser("jp@gmail.com");
        return apiResponse.create(200, "success", userFound);

    }

    // delete user
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping(path="")
    @Transactional
    public void deleteUser(){
        userService.deleteUser("jp@gmail.com");
    }
    
}
