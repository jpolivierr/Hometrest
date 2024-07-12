package com.appvenir.hometrest.auth.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.appvenir.hometrest.auth.dto.UserDetailsDto;
import com.appvenir.hometrest.domain.user.repository.UserRepository;
import com.appvenir.hometrest.exception.user.UserNotFoundException;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserAuthService implements UserDetailsService{

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UserNotFoundException {
        return userRepository.findByEmail(email)
                            .map(UserDetailsDto::new)
                            .orElseThrow( () -> new UserNotFoundException());
        
    }
    
}
