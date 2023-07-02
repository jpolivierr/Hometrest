package com.appvenir.hometrest.entryPoint.Private.likedProperties;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

@Controller
@RequestMapping(path="/api/v1/like_property")
public class LikePropertiesController {

    private LikePropertiesService likePropertiesService;

    LikePropertiesController(
                              LikePropertiesService likePropertiesService
                              ){

        this.likePropertiesService = likePropertiesService;
    }

     // Add liked property
     @ResponseStatus(HttpStatus.CREATED)
     @PostMapping(path="")
     public void addLikedProperty(@RequestBody LikeProperties likeProperties){
        likePropertiesService.add("jp@gmail.com", likeProperties);
     }

      // delete liked property
      @ResponseStatus(HttpStatus.NO_CONTENT)
      @DeleteMapping(path="")
      public void deleteLikedProperty(@RequestBody LikeProperties likeProperties){
        likePropertiesService.delete("jp@gmail.com", likeProperties);
      }
    
}
