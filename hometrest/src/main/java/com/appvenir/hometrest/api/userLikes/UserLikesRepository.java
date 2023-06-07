package com.appvenir.hometrest.api.userLikes;

import java.util.List;

import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


public interface UserLikesRepository extends CrudRepository<UserLikes,Integer> {

   @Query("SELECT like_id, property_id " + 
          "FROM user_likes " + 
          "WHERE user_id = "+
          "(select id from user where email = :email)")
    List<UserLikes> findAllByEmail(@Param("email") String email);

    void deleteById(@Param("id") Integer id );

    @Modifying
    @Query("INSERT INTO user_likes (property_id, user_id) " +
           "VALUES (:#{#userLikes.propertyId} , (select id from user where email = :email))")
    void saveLike(@Param("userLikes") UserLikes userLikes,String email);
}
