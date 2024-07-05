package com.appvenir.hometrest.domain.Public.Messaging;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;


public class Messaging {

    @NotBlank(message = "Full name is required")
    private String fullName;
    @NotBlank(message = "Mobile number is required")
    private String mobile;
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email")
    private String email;
    @NotBlank(message = "Message is required")
    private String message;


    public String getFullName() {
        return this.fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getMobile() {
        return this.mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String message) {
        this.message = message;
    }


    @Override
    public String toString() {
        return "{" +
            " fullName='" + getFullName() + "'" +
            ", mobile='" + getMobile() + "'" +
            ", email='" + getEmail() + "'" +
            ", message='" + getMessage() + "'" +
            "}";
    }
    
}
