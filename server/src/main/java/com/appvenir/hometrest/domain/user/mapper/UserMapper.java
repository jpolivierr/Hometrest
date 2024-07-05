package com.appvenir.hometrest.domain.user.mapper;

import com.appvenir.hometrest.domain.user.dto.UserRegistrationDto;
import com.appvenir.hometrest.domain.user.model.User;

public class UserMapper {  

    public static User toModel(UserRegistrationDto userRegistrationDTO){
        User user = new User();
        user.setFirstName(userRegistrationDTO.getFirstName());
        user.setLastName(userRegistrationDTO.getLastName());
        user.setEmail(userRegistrationDTO.getEmail());
        user.setPassword(userRegistrationDTO.getPassword());

        return user;
    }
    
}
