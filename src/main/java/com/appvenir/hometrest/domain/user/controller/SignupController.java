package com.appvenir.hometrest.domain.user.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.appvenir.hometrest.domain.user.dto.UserDto;
import com.appvenir.hometrest.domain.user.dto.UserRegistrationDto;
import com.appvenir.hometrest.domain.user.service.UserService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class SignupController {

    private final UserService userService;

    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<UserDto> createUser(@Valid @ModelAttribute UserRegistrationDto userRegistrationDto){
         return ResponseEntity.ok(userService.saveUser(userRegistrationDto));
    }
    

}
