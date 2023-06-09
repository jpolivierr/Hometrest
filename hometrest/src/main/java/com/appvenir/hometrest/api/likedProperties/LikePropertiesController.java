package com.appvenir.hometrest.api.likedProperties;

import java.util.Optional;

import org.springframework.data.relational.core.sql.Like;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.appvenir.hometrest.ApiResponse.ApiResponse;
import com.appvenir.hometrest.Exceptions.UserNotFoundException;
import com.appvenir.hometrest.api.userJpa.User;
import com.appvenir.hometrest.api.userJpa.UserRepository;

@Controller
@RequestMapping(path="/api/v1/like_property")
public class LikePropertiesController {

    private LikePropertiesRepository likedProperty;
    private ApiResponse apiResponse;
    private UserRepository userRepository;

    LikePropertiesController(
                              LikePropertiesRepository likedProperty,
                              ApiResponse apiResponse,
                              UserRepository userRepository){
        this.likedProperty = likedProperty;
        this.apiResponse = apiResponse;
        this.userRepository = userRepository;
    }

     // Add liked property
     @ResponseStatus(HttpStatus.CREATED)
     @PostMapping(path="")
     public void addLikedProperty(@RequestBody LikeProperties likedProperties){

        Optional<User> user = userRepository.findByEmail("jp@gmail.com");
        User userFound = user.orElseThrow(UserNotFoundException::new);
        likedProperties.setUser(userFound);
        likedProperty.save(likedProperties);

     }
    
}
