package com.appvenir.hometrest.domain.property.dto;

import java.time.LocalDateTime;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LikedPropertyDto {
    private String propertyId;
    private int price;
    private int beds;
    private int baths;
    private int sqft;
    private String street;
    private String city;
    private String stateCode;
    private String zip;
    private LocalDateTime dateCreated;
    private LocalDateTime lastUpdated;
}
