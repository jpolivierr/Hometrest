package com.appvenir.hometrest.domain.property.dto;

import java.time.LocalDateTime;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LikedPropertyDto {
    private String propertyId;
    private LocalDateTime dateCreated;
    private LocalDateTime lastUpdated;
}
