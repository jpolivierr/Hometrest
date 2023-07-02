package com.appvenir.hometrest.Authentication.login;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.appvenir.hometrest.Exceptions.UserNotFoundException;
import com.appvenir.hometrest.entryPoint.Private.user.User;
import com.appvenir.hometrest.entryPoint.Private.user.UserService;

@Service
public class UserLoginService {

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    public UserLoginService(UserService userService, PasswordEncoder passwordEncoder){
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    public User authenticate(String email, String password){

        User user = userService.findUser(email);

        String userPassword = user.getPassword();

        Boolean passwordMatch = passwordEncoder.matches(password, userPassword);

        if (passwordMatch) {

                return user;

            } else {

                throw new UserNotFoundException();

            }
 
    }
    
}
