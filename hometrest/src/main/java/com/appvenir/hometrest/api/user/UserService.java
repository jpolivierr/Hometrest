package com.appvenir.hometrest.api.user;

import java.util.Optional;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.appvenir.hometrest.Exceptions.UserNotFoundException;

@Service
public class UserService {

    private UserRepository userRepository;
    // private PasswordEncoder passwordEncoder;

    UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    // Create a new user
    public void createUser(User user){

            // String userpassword = user.getPassword();
            // String encodedPassword = passwordEncoder.encode(userpassword);
            
            // user.setPassword(encodedPassword);
             
            // userRepository.save(user);

            userRepository.save(user);

    }
    
    // Update user
    public void updateUser(User user){ 

        userRepository.save(user);
        
    }

    // Find user
    public User findUser(String email){ 

        Optional<User> getUser = userRepository.findByEmail(email);
        User userFound = getUser.orElseThrow(UserNotFoundException::new);
        return userFound;
        
    }

    // delete user
    public void deleteUser(String email){

        userRepository.deleteByEmail(email);

    }
}
