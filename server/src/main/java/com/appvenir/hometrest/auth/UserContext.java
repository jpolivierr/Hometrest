package com.appvenir.hometrest.auth;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import com.appvenir.hometrest.auth.dto.UserDetailsDto;
import com.appvenir.hometrest.domain.user.dto.UserDto;
import com.appvenir.hometrest.domain.user.mapper.UserMapper;
import com.appvenir.hometrest.domain.user.model.User;
import com.appvenir.hometrest.exception.user.UserNotFoundException;

public class UserContext {
    
    public static UserDto getPrincipalDto() throws UserNotFoundException {

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

          if (principal instanceof UserDetails) {
            User user = ((UserDetailsDto) principal).getUser();
            if(user == null) throw new UserNotFoundException();
            return UserMapper.toDto(user);
        }

        throw new UserNotFoundException();

    }
}
