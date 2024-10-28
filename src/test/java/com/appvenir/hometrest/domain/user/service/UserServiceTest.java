package com.appvenir.hometrest.domain.user.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.appvenir.hometrest.domain.account.AccountType;
import com.appvenir.hometrest.domain.user.dto.UserDto;
import com.appvenir.hometrest.domain.user.factory.UserFactory;
import com.appvenir.hometrest.domain.user.mapper.UserMapper;
import com.appvenir.hometrest.domain.user.model.User;
import com.appvenir.hometrest.domain.user.repository.UserRepository;
import com.appvenir.hometrest.exception.user.EmailExistException;

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
    void saveUser_should_save_user_and_return_userDto_object(){

        var user = UserFactory.getUser();

        when(userRepository.findByEmail(any(String.class))).thenReturn(Optional.empty());

        when(userRepository.save(any(User.class))).thenReturn(user);

        var userRegistrationDto = UserMapper.toUserRegistrotionDto(user);

        UserDto userDto = userService.saveUser(userRegistrationDto);

        ArgumentCaptor<User> userCaptor = ArgumentCaptor.forClass(User.class);
        verify(userRepository).save(userCaptor.capture());

        User capturedUser = userCaptor.getValue();
        assertNotNull(capturedUser.getAccount(), "Account should be created and associated with the user");
        assertEquals(AccountType.DEFAULT, capturedUser.getAccount().getAccountType(), "Account type should be DEFAULT");

        verify(userRepository).findByEmail(user.getEmail());
        verify(userRepository).save(any(User.class));

        assertNotNull(userDto);
        assertEquals(user.getFirstName(), userDto.getFirstName());
        assertEquals(user.getLastName(), userDto.getLastName());
        assertEquals(user.getEmail(), userDto.getEmail());

    }

    @Test
    void saveUser_should_throw_IllegalArgementException()
    {

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            userService.saveUser(null);
        });

        assertEquals("Registration Dto cannot be null", exception.getMessage());

        verify(userRepository, never()).findByEmail(any(String.class));
        verify(userRepository, never()).save(any(User.class));

    }

    @Test
    void saveUser_should_throw_EmailExistException()
    {

        var userRegistrationDto = UserFactory.getUserRegistrationDto();

        var user = UserFactory.getUser();

        when(userRepository.findByEmail(userRegistrationDto.getEmail())).thenReturn(Optional.of(user));

        EmailExistException exception = assertThrows(EmailExistException.class, () -> {
            userService.saveUser(userRegistrationDto);
        });

        assertEquals("This email address is already in use.", exception.getMessage());

        verify(userRepository, never()).save(any(User.class));

    }
    
}
