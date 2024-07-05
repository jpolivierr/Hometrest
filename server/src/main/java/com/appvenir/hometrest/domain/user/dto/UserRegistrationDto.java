package com.appvenir.hometrest.domain.user.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class UserRegistrationDto {

    @Column(name = "first_name")
    @NotBlank(message = "First name is required")
    private String firstName;

    @Column(nullable = false, name = "last_name")
    @NotBlank(message = "Last name is required")
    private String lastName;

    @Column(nullable = false, name = "email")
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email")
    private String email;

    @Column(nullable = false, name = "password")
    @NotBlank(message = "Password is required")
    private String password;
    
}
