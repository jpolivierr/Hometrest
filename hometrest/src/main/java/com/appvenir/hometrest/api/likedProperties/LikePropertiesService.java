package com.appvenir.hometrest.api.likedProperties;

import org.springframework.stereotype.Service;

import com.appvenir.hometrest.api.user.User;
import com.appvenir.hometrest.api.user.UserService;

@Service
public class LikePropertiesService {
    
    private LikePropertiesRepository likePropertiesRepository;
    private UserService userService;

    LikePropertiesService(LikePropertiesRepository likePropertiesRepository,UserService userService){
                 this.likePropertiesRepository = likePropertiesRepository;
                 this.userService = userService;                
    }

    // Add like property
    public void add(String email, LikeProperties likeProperties){

        User user = userService.findUser(email);
        likeProperties.setUser(user);
        likePropertiesRepository.save(likeProperties);

    }

    // delete liked property
    public void delete(String email, LikeProperties likeProperties){

        User user = userService.findUser(email);
        likeProperties.setUser(user);
        likePropertiesRepository.deleteById(likeProperties.getId());

    }

}
