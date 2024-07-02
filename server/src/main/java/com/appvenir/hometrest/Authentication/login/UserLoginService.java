package com.appvenir.hometrest.Authentication.login;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.appvenir.hometrest.entryPoint.Private.user.User;
import com.appvenir.hometrest.entryPoint.Private.user.UserService;
import com.appvenir.hometrest.exception.user.UserNotFoundException;

@Service
public class UserLoginService {

    private final PasswordEncoder passwordEncoder;
    private final UserService userService;

    public UserLoginService(
         PasswordEncoder passwordEncoder,
         UserService userService
         ){
        this.passwordEncoder = passwordEncoder;
        this.userService = userService;
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
