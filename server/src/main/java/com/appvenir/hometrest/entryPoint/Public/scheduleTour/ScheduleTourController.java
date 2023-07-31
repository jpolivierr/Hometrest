package com.appvenir.hometrest.entryPoint.Public.scheduleTour;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.appvenir.hometrest.process.ApiResponse.ApiResponse;

import jakarta.validation.Valid;

@Controller
@RequestMapping(path="/api/v1/schedule_tour")
public class ScheduleTourController {

    private ApiResponse apiResponse;

    public ScheduleTourController(ApiResponse apiResponse){
        this.apiResponse = apiResponse;
    }

    @ResponseStatus(HttpStatus.OK)
    @PostMapping(path = "")
    public ResponseEntity<Object> schedule(@Valid @RequestBody ScheduleTour scheduleTour){

        return apiResponse.create(200, "success", "Appointment scheduled");

    }
    
}
