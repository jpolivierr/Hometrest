package com.appvenir.hometrest.domain.property.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.appvenir.hometrest.domain.property.model.LikedProperty;
import com.appvenir.hometrest.domain.user.model.User;

@Repository
public interface LikedPropertyRepository extends JpaRepository<LikedProperty, Long>{

    @Query("SELECT lp FROM LikedProperty lp JOIN lp.users u WHERE u = :user AND lp.propertyId = :propertyId")
    Optional<LikedProperty> findByUserAndPropertyId(@Param("user") User user, @Param("propertyId") String propertyId);

    @Query("SELECT lp FROM LikedProperty lp JOIN lp.users u WHERE u = :user")    
    List<LikedProperty> findAllByUser(@Param("user") User user);

} 
