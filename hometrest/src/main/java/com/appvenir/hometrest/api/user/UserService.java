package com.appvenir.hometrest.api.user;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.appvenir.hometrest.Exceptions.UserNotFoundException;

// import org.springframework.stereotype.Service;
// import org.springframework.beans.factory.annotation.Autowired;

@Service
public class UserService {

    private final UserRepository userRepository;

    UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
       
    }

    public void saveUser(User user) {
  
            userRepository.save(user);
    }

    public void updateUser(User user, String email) {

        userRepository.updateUser(user, email);
    }

    public User findByEmail(String email) {
  
        Optional<User> user = userRepository.findByEmail(email);

        return user.orElseThrow(UserNotFoundException::new);
    }

    public void deleteByEmail(String email){

        userRepository.deleteByEmail(email);

    }
    
}
