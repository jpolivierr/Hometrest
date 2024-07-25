package com.appvenir.hometrest.domain.user.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.appvenir.hometrest.domain.user.dto.UserDto;
import com.appvenir.hometrest.domain.user.dto.UserLoginDto;
import com.appvenir.hometrest.domain.user.dto.UserRegistrationDto;
import com.appvenir.hometrest.domain.user.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/aut/users")
@RequiredArgsConstructor
public class UserAuthController {

    private final UserService userService;

    // @PostMapping
    // @ResponseStatus(HttpStatus.OK)
    // public ResponseEntity<UserDto> authenticateUser(@RequestBody UserLoginDto userLogin){
    //      return ResponseEntity.ok(userService.saveUser(userRegistrationDto));
    // }
    
}
