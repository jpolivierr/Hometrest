package com.appvenir.hometrest.Authentication;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.appvenir.hometrest.api.user.User;
import com.appvenir.hometrest.api.user.UserService;

@Service
public class MyUserDetailService implements UserDetailsService{

    private UserService userService;

    MyUserDetailService(UserService userService){
        this.userService = userService;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{

        User user = userService.findUser(username);
        if(user == null){
            throw new UsernameNotFoundException(username);
        }

        return new AuthUser(user);

    }
    
}
