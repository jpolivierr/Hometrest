package com.appvenir.hometrest.api.requestDto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class RequestDTO {

    @NotBlank(message = "Name is required")
    private String firstName;

    @NotBlank(message = "Name is required")
    private String lastName;

    @Email(message = "Invalid email")
    private String email;

    @NotBlank(message = "Pasword is required")
    private String password;
    
}
