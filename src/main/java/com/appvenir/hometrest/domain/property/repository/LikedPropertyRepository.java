package com.appvenir.hometrest.domain.property.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.appvenir.hometrest.domain.property.model.LikedProperty;

@Repository
public interface LikedPropertyRepository extends JpaRepository<LikedProperty, Long>{

    Optional<LikedProperty> findByPropertyId(String propertyId);

} 
