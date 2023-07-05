package com.appvenir.hometrest.Authentication.Registration;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class UserRegistrationService {

       private UserRegistrationRepository userRegistrationRepository;
    private PasswordEncoder passwordEncoder;

    UserRegistrationService(UserRegistrationRepository userRegistrationRepository, PasswordEncoder passwordEncoder){
        this.userRegistrationRepository = userRegistrationRepository;
        this.passwordEncoder = passwordEncoder;
    }



             // Create a new user
             public void createUser(UserRegistration user){

            // String userpassword = user.getPassword();
            String encodedPassword = passwordEncoder.encode(user.getPassword());
            
            user.setPassword(encodedPassword);

            userRegistrationRepository.save(user);

    }

    
}
