package com.appvenir.hometrest.domain.user.dto;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import com.appvenir.hometrest.domain.property.model.LikedProperty;

import lombok.Data;

@Data
public class UserDto {

    private String firstName;
    private String lastName;
    private String email;
    private Set<LikedProperty> likedProperties = new HashSet<>();
    private LocalDateTime dateCreated;
    private LocalDateTime lastUpdated;
    
}
