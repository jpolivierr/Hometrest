package com.appvenir.hometrest.Authentication;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.appvenir.hometrest.api.user.User;

public class AuthUser implements UserDetails {

    private User user;
    
    public AuthUser(User user){
        this.user = user;
    }

    public String getFirstName(){
        return user.getFirstName();
    }

    public String getLastName(){
        return user.getLastName();
    }

    public String getEmail(){
        return user.getEmail();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
       
        return null;
    }

    @Override
    public String getPassword() {
        
        return user.getPassword();

    }

    @Override
    public String getUsername() {
        
        return user.getEmail();

    }

    @Override
    public boolean isAccountNonExpired() {
        
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        
        return true;

    }

    @Override
    public boolean isCredentialsNonExpired() {
        
        return true;
    }

    @Override
    public boolean isEnabled() {
        
        return true;

    }
    
}
