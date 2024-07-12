package com.appvenir.hometrest.domain.user.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.appvenir.hometrest.domain.user.dto.UserDto;
import com.appvenir.hometrest.domain.user.mapper.UserMapper;
import com.appvenir.hometrest.domain.user.model.User;
import com.appvenir.hometrest.domain.user.repository.UserRepository;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private UserService userService;

    @BeforeEach
    void setUp() {
        passwordEncoder = new BCryptPasswordEncoder();
        userService = new UserService(userRepository, passwordEncoder);
    }

    @Test
    void saved_user_should_return_user_object(){

        var user = new User();
        user.setFirstName("Frederic");
        user.setLastName("Olivier");
        user.setEmail("emapl@example.com");
        user.setPassword("4082098");

        when(userRepository.findByEmail(any(String.class))).thenReturn(Optional.empty());

        when(userRepository.save(any(User.class))).thenReturn(user);

        var userRegistrationDto = UserMapper.toUserRegistrotionDto(user);

        UserDto userDto = userService.saveUser(userRegistrationDto);

        verify(userRepository).findByEmail(user.getEmail());
        verify(userRepository).save(any(User.class));

        assertNotNull(userDto);
        assertEquals(user.getFirstName(), userDto.getFirstName());
        assertEquals(user.getLastName(), userDto.getLastName());
        assertEquals(user.getEmail(), userDto.getEmail());

    }
    
}
