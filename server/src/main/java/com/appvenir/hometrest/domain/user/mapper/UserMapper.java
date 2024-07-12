package com.appvenir.hometrest.domain.user.mapper;

import com.appvenir.hometrest.domain.user.dto.UserDto;
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

    public static User toModel(UserDto userDto){
        User user = new User();
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setEmail(userDto.getEmail());

        return user;
    }
    
    public static UserDto toDto(UserRegistrationDto userRegistrationDTO){
        UserDto user = new UserDto();
        user.setFirstName(userRegistrationDTO.getFirstName());
        user.setLastName(userRegistrationDTO.getLastName());
        user.setEmail(userRegistrationDTO.getEmail());

        return user;
    }

    public static UserDto toDto(User user){
        UserDto userDto = new UserDto();
        userDto.setFirstName(user.getFirstName());
        userDto.setLastName(user.getLastName());
        userDto.setEmail(user.getEmail());

        return userDto;
    }

    public static UserRegistrationDto toUserRegistrotionDto(User user){
        UserRegistrationDto userRegistrationDto = new UserRegistrationDto();
        userRegistrationDto.setFirstName(user.getFirstName());
        userRegistrationDto.setLastName(user.getLastName());
        userRegistrationDto.setEmail(user.getEmail());
        userRegistrationDto.setPassword(user.getPassword());

        return userRegistrationDto;
    }
}
