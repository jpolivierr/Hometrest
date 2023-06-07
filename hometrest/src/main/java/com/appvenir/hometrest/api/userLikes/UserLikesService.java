package com.appvenir.hometrest.api.userLikes;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class UserLikesService {

    private final UserLikesRepository userLikesRepository;

    public UserLikesService(UserLikesRepository userLikesRepository){
        this.userLikesRepository = userLikesRepository;
    }

    void save(UserLikes userLikes, String email){
        userLikesRepository.saveLike(userLikes, email);
    }

    List<UserLikes> findAllByEmail(String email){
        return userLikesRepository.findAllByEmail(email);
    }
    

    void deleteById(Integer id){
        userLikesRepository.deleteById(id);
    }
}
