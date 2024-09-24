package com.appvenir.hometrest.domain.property.mapper;

import com.appvenir.hometrest.domain.property.dto.LikedPropertyDto;
import com.appvenir.hometrest.domain.property.model.LikedProperty;

public class LikedPropertyMapper {

    public static LikedPropertyDto toDto(LikedProperty property){
        LikedPropertyDto likedProperty = new LikedPropertyDto();
        likedProperty.setPropertyId(property.getPropertyId());
        likedProperty.setPrice(property.getPrice());
        likedProperty.setBeds(property.getBeds());
        likedProperty.setBaths(property.getBaths());
        likedProperty.setSqft(property.getSqft());
        likedProperty.setStreet(property.getStreet());
        likedProperty.setCity(property.getCity());
        likedProperty.setStateCode(property.getStateCode());
        likedProperty.setZip(property.getZip());
        likedProperty.setDateCreated(property.getDateCreated());
        likedProperty.setLastUpdated(property.getLastUpdated());
        return likedProperty;
    }

    public static LikedProperty toModel(LikedPropertyDto property){
        LikedProperty likedProperty = new LikedProperty();
        likedProperty.setPropertyId(property.getPropertyId());
        likedProperty.setPrice(property.getPrice());
        likedProperty.setBeds(property.getBeds());
        likedProperty.setBaths(property.getBaths());
        likedProperty.setSqft(property.getSqft());
        likedProperty.setStreet(property.getStreet());
        likedProperty.setCity(property.getCity());
        likedProperty.setStateCode(property.getStateCode());
        likedProperty.setZip(property.getZip());
        likedProperty.setDateCreated(property.getDateCreated());
        likedProperty.setLastUpdated(property.getLastUpdated());
        return likedProperty;
    }
    
}
