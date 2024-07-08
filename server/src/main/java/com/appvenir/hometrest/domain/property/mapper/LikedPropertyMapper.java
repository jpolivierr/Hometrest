package com.appvenir.hometrest.domain.property.mapper;

import com.appvenir.hometrest.domain.property.dto.LikedPropertyDto;
import com.appvenir.hometrest.domain.property.model.LikedProperty;

public class LikedPropertyMapper {

    public static LikedPropertyDto toDto(LikedProperty property){
        LikedPropertyDto likedProperty = new LikedPropertyDto();
        likedProperty.setPropertyId(property.getPropertyId());
        likedProperty.setDateCreated(property.getDateCreated());
        likedProperty.setLastUpdated(property.getLastUpdated());
        return likedProperty;
    }
    
}
