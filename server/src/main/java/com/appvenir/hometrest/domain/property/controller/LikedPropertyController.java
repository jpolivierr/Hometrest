package com.appvenir.hometrest.domain.property.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.appvenir.hometrest.auth.UserContext;
import com.appvenir.hometrest.domain.property.dto.LikedPropertyDto;
import com.appvenir.hometrest.domain.property.service.LikedPropertyService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/liked_properties")
@RequiredArgsConstructor
public class LikedPropertyController {

    private final LikedPropertyService likedPropertyService;

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<LikedPropertyDto> saveProperties(@RequestBody LikedPropertyDto likedPropertyDto){
        var user = UserContext.getPrincipalDto();
        return ResponseEntity.ok(likedPropertyService.saveUserProperty(user, likedPropertyDto));
    }

    @DeleteMapping()
    @ResponseStatus(HttpStatus.OK)
    public void deleteUserProperty(@RequestBody LikedPropertyDto likedPropertyDto){
        var user =UserContext.getPrincipalDto();
        likedPropertyService.deleteUserProperty(user, likedPropertyDto);
    }
    
}
