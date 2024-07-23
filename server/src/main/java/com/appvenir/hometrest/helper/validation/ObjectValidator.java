package com.appvenir.hometrest.helper.validation;

import jakarta.validation.Validator;

import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import com.appvenir.hometrest.helper.validation.exception.ValidationException;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.ValidatorFactory;

public class ObjectValidator {
    
    private final Validator validator;

    public ObjectValidator(){
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        this.validator = factory.getValidator();
    }

    public <T> void validate(T userRegistration) throws ValidationException {
        Set<ConstraintViolation<T>> violations = validator.validate(userRegistration);
        checkErrors(violations);
    }

     public <T> void checkErrors(Set<ConstraintViolation<T>> violations){
        if (!violations.isEmpty()) {
            Map<String, String> errors = violations.stream()
                .collect(Collectors.toMap(
                    violation -> violation.getPropertyPath().toString(),
                    ConstraintViolation::getMessage,
                    (existing, replacement) -> existing
                ));
            throw new ValidationException(errors);
        }
    }
    
}
