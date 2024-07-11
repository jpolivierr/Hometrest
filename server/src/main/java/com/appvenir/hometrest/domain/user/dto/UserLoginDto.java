package com.appvenir.hometrest.domain.user.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class UserLoginDto {

    @NotBlank(message = "Email cannot be empty")
    @Email(message = "Invalid email")
    private String email;

    @NotBlank(message = "Password is required")
    private String password;
    
}
