package com.appvenir.hometrest.domain.user.service;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.appvenir.hometrest.domain.user.dto.UserDto;
import com.appvenir.hometrest.domain.user.dto.UserRegistrationDto;
import com.appvenir.hometrest.domain.user.mapper.UserMapper;
import com.appvenir.hometrest.domain.user.model.User;
import com.appvenir.hometrest.domain.user.repository.UserRepository;
import com.appvenir.hometrest.exception.user.EmailExistException;
import com.appvenir.hometrest.exception.user.UserNotFoundException;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserDto saveUser(UserRegistrationDto userRegistrationDto){

        userRepository.findByEmail(userRegistrationDto.getEmail()).ifPresent( (u) -> {
            throw new EmailExistException();
        });

        userRegistrationDto.setPassword(passwordEncoder.encode(userRegistrationDto.getPassword()));

        User user = UserMapper.toModel(userRegistrationDto);

        return UserMapper.toDto(userRepository.save(user));
        
    }

    public UserDto updateUser(UserDto userDto){

        User user = userRepository.findByEmail(userDto.getEmail()).orElseThrow(() -> new UserNotFoundException());

        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setEmail(userDto.getEmail());

        return UserMapper.toDto(userRepository.save(user));
        
    }

    public UserDto getUserByEmail(String email){
        
        User user = userRepository.findByEmail(email).orElseThrow( () -> new UserNotFoundException());

        return UserMapper.toDto(user);

    }

    public List<UserDto> getAllUsers(){
        
        return  userRepository.findAll().stream().map(UserMapper::toDto).toList();

    }

    public void deleteUserByEmail(String email){
        
        User user = userRepository.findByEmail(email).orElseThrow( () -> new UserNotFoundException());

        userRepository.delete(user);

    }

    public Boolean userExist(String email){
        return userRepository.findByEmail(email).isPresent();
    }
    
}
