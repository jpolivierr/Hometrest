package com.appvenir.hometrest.api.userJpa;

import java.util.Optional;

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
import com.appvenir.hometrest.Exceptions.UserNotFoundException;

import jakarta.transaction.Transactional;

@Controller
@RequestMapping(path="/api/v1/user")
public class UserController {

    private UserRepository userRepository;
    private ApiResponse apiResponse;

    UserController(UserRepository userRepository, ApiResponse apiResponse){
        this.userRepository = userRepository;
        this.apiResponse = apiResponse;
    }

    // Create a new user
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(path="")
    public void addNewUser(@RequestBody User user){
        userRepository.save(user);
    }

    // Update user
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping(path="")
    public void updateUser(@RequestBody User user){
        userRepository.save(user);
    }

    // Find user
    @GetMapping(path="")
    public ResponseEntity<Object> findUser(){
        Optional<User> user = userRepository.findByEmail("jp@gmail.com");
        User userFound = user.orElseThrow(UserNotFoundException::new);
        return apiResponse.create(200, "success", userFound);
    }

    // delete user
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping(path="")
    @Transactional
    public void deleteUser(){
        userRepository.deleteByEmail("ced@gmail.com");
    }
    
}
