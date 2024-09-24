package com.appvenir.hometrest.domain.property.service;

import org.springframework.stereotype.Service;

import com.appvenir.hometrest.domain.property.dto.LikedPropertyDto;
import com.appvenir.hometrest.domain.property.mapper.LikedPropertyMapper;
import com.appvenir.hometrest.domain.property.model.LikedProperty;
import com.appvenir.hometrest.domain.property.repository.LikedPropertyRepository;
import com.appvenir.hometrest.domain.user.dto.UserDto;
import com.appvenir.hometrest.domain.user.model.User;
import com.appvenir.hometrest.domain.user.repository.UserRepository;
import com.appvenir.hometrest.exception.user.UserNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class LikedPropertyService {

    private final LikedPropertyRepository likedPropertyRepository;
    private final UserRepository userRepository;

    @Transactional
    public LikedPropertyDto saveUserProperty(UserDto userDto, LikedPropertyDto likedPropertyDto) {
        User user = userRepository.findByEmail(userDto.getEmail())
            .orElseThrow(UserNotFoundException::new);

        LikedProperty property = likedPropertyRepository.findByPropertyId(likedPropertyDto.getPropertyId())
            .orElseGet(() -> {
                
                return LikedPropertyMapper.toModel(likedPropertyDto);
        });

        property.addUser(user);
        user.getLikedProperties().add(property);
        userRepository.save(user);
        return LikedPropertyMapper.toDto(property);
    }


    @Transactional
    public void deleteUserProperty(UserDto userDto, LikedPropertyDto likedPropertyDto) {
        User user = userRepository.findByEmail(userDto.getEmail())
            .orElseThrow(() -> new UserNotFoundException());
        LikedProperty property = likedPropertyRepository.findByPropertyId(likedPropertyDto.getPropertyId())
            .orElseThrow(EntityNotFoundException::new);
        user.getLikedProperties().remove(property);
        property.getUsers().remove(user);
        userRepository.save(user);
        if (property.getUsers().isEmpty()) {
            likedPropertyRepository.delete(property);
        }
    }

    
}
