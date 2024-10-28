package com.appvenir.hometrest.domain.user.factory;

import com.appvenir.hometrest.domain.user.dto.UserDto;
import com.appvenir.hometrest.domain.user.dto.UserLoginDto;
import com.appvenir.hometrest.domain.user.dto.UserRegistrationDto;
import com.appvenir.hometrest.domain.user.model.User;

public class UserFactory {

    private static final String firstName = "Frederic";
    private static final String lastName = "Olivier";
    private static final String email = "jp@gmail.com";
    private static final String password = "password";

    public static User getUser()
    {
        var user = new User();
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setEmail(email);
        user.setPassword(password);
        return user;
    }
    
    public static UserDto getUserDto()
    {
        var userDto = new UserDto();
        userDto.setFirstName(firstName);
        userDto.setLastName(lastName);
        userDto.setEmail(email);
        return userDto;
    }

    public static UserRegistrationDto getUserRegistrationDto()
    {
        var userRegistrationDto = new UserRegistrationDto();
        userRegistrationDto.setFirstName(firstName);
        userRegistrationDto.setLastName(lastName);
        userRegistrationDto.setEmail(email);
        userRegistrationDto.setPassword(password);
        return userRegistrationDto;
    }

    public static UserLoginDto getUserLoginDto(String email, String password)
    {
        var userLoginDto = new UserLoginDto();
        userLoginDto.setEmail(email);
        userLoginDto.setPassword(password);
        return userLoginDto;
    }

}
