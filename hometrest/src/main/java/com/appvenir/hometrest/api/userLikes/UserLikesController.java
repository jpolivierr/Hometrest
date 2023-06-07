package com.appvenir.hometrest.api.userLikes;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RestController;

import com.appvenir.hometrest.ApiResponse.ApiResponse;

@RestController
public class UserLikesController {

    private final UserLikesService userLikesService;
    private final ApiResponse apiResponse;

    public UserLikesController(UserLikesService userLikesService, ApiResponse apiResponse){
        this.userLikesService = userLikesService;
        this.apiResponse = apiResponse;
    }

        // save newlike
      @ResponseStatus(HttpStatus.CREATED)
      @PostMapping(path="/user_likes")
      public void save(@RequestBody UserLikes userLikes) {
        
        userLikesService.save(userLikes, "ced@gmail.com");
      
      }

      // Find user by email with likes
      @GetMapping(path="/user_likes")
      public ResponseEntity<Object> findUserWithUserLikesByEmail() {
        List<UserLikes>  user = userLikesService.findAllByEmail("ced@gmail.com");
        return apiResponse.create(200, "success", user);
      }

      // delete user
      @ResponseStatus(HttpStatus.NO_CONTENT)
      @DeleteMapping(path="/user_likes")
        public void delete() {
        userLikesService.deleteById(1);
   }
    
}
