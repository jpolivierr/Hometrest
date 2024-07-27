package com.appvenir.hometrest.domain.user.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.appvenir.hometrest.auth.dto.UserDetailsDto;
import com.appvenir.hometrest.domain.user.dto.UserDto;
import com.appvenir.hometrest.domain.user.dto.UserRegistrationDto;
import com.appvenir.hometrest.domain.user.mapper.UserMapper;
import com.appvenir.hometrest.domain.user.model.User;
import com.appvenir.hometrest.domain.user.service.UserService;
import com.appvenir.hometrest.exception.user.UserNotFoundException;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<UserDto> createUser(@RequestBody UserRegistrationDto userRegistrationDto){
         return ResponseEntity.ok(userService.saveUser(userRegistrationDto));
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<UserDto> updateUser(@RequestBody UserDto userDto){   
          return ResponseEntity.ok(userService.updateUser(userDto));
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<UserDto> getUser(){
     Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

     if (principal instanceof UserDetailsDto) {
          User user = ((UserDetailsDto) principal).getUser();

          if(user == null) throw new UserNotFoundException();

          return ResponseEntity.ok(UserMapper.toDto(user));
     }

      throw new UserNotFoundException();    
    }

    @DeleteMapping("/{email}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteUser(@PathVariable("email") String email){
         userService.deleteUserByEmail(email);
    }
    
}
