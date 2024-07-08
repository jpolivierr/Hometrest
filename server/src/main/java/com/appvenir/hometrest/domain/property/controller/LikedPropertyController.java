package com.appvenir.hometrest.domain.property.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.appvenir.hometrest.domain.property.dto.LikedPropertyDto;
import com.appvenir.hometrest.domain.property.service.LikedPropertyService;
import com.appvenir.hometrest.domain.user.dto.UserDto;
import com.appvenir.hometrest.domain.user.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/liked_properties")
@RequiredArgsConstructor
public class LikedPropertyController {

    private final LikedPropertyService likedPropertyService;
    private final UserService userService;

    @PostMapping("/{propertyId}")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<LikedPropertyDto> saveUserProperty(@PathVariable("propertyId") String propertyId){

        UserDto user = userService.getUserByEmail("kp@gmail.com");

        return ResponseEntity.ok(likedPropertyService.saveUserProperty(user, propertyId));

    }

    @DeleteMapping("/{propertyId}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteUserProperty(@PathVariable("propertyId") String propertyId){

        UserDto user = userService.getUserByEmail("kp@gmail.com");

        likedPropertyService.deleteUserProperty(user, propertyId);

    }
    
}
