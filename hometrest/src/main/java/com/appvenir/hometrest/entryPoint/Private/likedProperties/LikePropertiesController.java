package com.appvenir.hometrest.entryPoint.Private.likedProperties;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.appvenir.hometrest.constants.SessionConstants;

import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping(path="/api/secure/v1/like_property")
public class LikePropertiesController {

    private LikePropertiesService likePropertiesService;
    private final String emailkey = SessionConstants.EMAIL;

    LikePropertiesController(
                              LikePropertiesService likePropertiesService
                              ){

        this.likePropertiesService = likePropertiesService;
    }

     // Add liked property
     @ResponseStatus(HttpStatus.CREATED)
     @PostMapping(path="")
     public void addLikedProperty(
      @RequestBody LikeProperties likeProperties, 
     HttpSession session){
      System.out.println("========================");
      System.out.println("ADD LIKE PROPS");
        String email = (String) session.getAttribute(emailkey);
        System.out.println(email);
        likePropertiesService.add(email, likeProperties);
     }

      // delete liked property
      @ResponseStatus(HttpStatus.NO_CONTENT)
      @DeleteMapping(path="")
      public void deleteLikedProperty(@RequestBody LikeProperties likeProperties, HttpSession session){
        System.out.println("========================");
      System.out.println("DELETE LIKE PROPS");
        String email = (String) session.getAttribute(emailkey);
        likePropertiesService.delete(email, likeProperties);
      }
    
}
