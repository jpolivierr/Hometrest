package com.appvenir.hometrest.domain.property.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.appvenir.hometrest.domain.property.dto.LikedPropertyDto;
import com.appvenir.hometrest.domain.property.mapper.LikedPropertyMapper;
import com.appvenir.hometrest.domain.property.model.LikedProperty;
import com.appvenir.hometrest.domain.property.repository.LikedPropertyRepository;
import com.appvenir.hometrest.domain.user.dto.UserDto;
import com.appvenir.hometrest.domain.user.model.User;
import com.appvenir.hometrest.domain.user.repository.UserRepository;
import com.appvenir.hometrest.exception.user.UserNotFoundException;

import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class LikedPropertyService {

    private final LikedPropertyRepository likedPropertyRepository;
    private final UserRepository userRepository;

    @Transactional
    public LikedPropertyDto saveUserProperty(UserDto userDto, String propertyId){

        User user = userRepository.findByEmail(userDto.getEmail())
            .orElseThrow(() -> new UserNotFoundException());

        likedPropertyRepository.findByUserAndPropertyId(user, propertyId).ifPresent( u -> {
            throw new EntityExistsException("User already like this property");
        });  

        LikedProperty property = new LikedProperty();
        property.setPropertyId(propertyId);
        property.addUser(user);
        
        LikedProperty likedProperty = likedPropertyRepository.save(property);

        return LikedPropertyMapper.toDto(likedProperty);

    }

    @Transactional
    public void deleteUserProperty(UserDto userDto, String propertyId){

        User user = userRepository.findByEmail(userDto.getEmail())
            .orElseThrow(() -> new UserNotFoundException());

        LikedProperty likedProperty = likedPropertyRepository.findByUserAndPropertyId(user, propertyId).orElseThrow( 
            () -> new EntityNotFoundException("A liked property was not found for the user")
        );

        likedPropertyRepository.delete(likedProperty);    

    }

    public List<LikedPropertyDto> getUserLikedProperties(UserDto userDto){

        User user = userRepository.findByEmail(userDto.getEmail())
        .orElseThrow(() -> new UserNotFoundException());

        return likedPropertyRepository.findAllByUser(user).stream()
                                                        .map(LikedPropertyMapper::toDto)
                                                        .toList();

    }
    
}
