// package com.appvenir.hometrest.api.user;

// import java.util.Optional;

// import org.springframework.data.jdbc.repository.query.Modifying;
// import org.springframework.data.jdbc.repository.query.Query;
// import org.springframework.data.repository.CrudRepository;
// import org.springframework.data.repository.query.Param;

// public interface UserRepository extends CrudRepository<User,Integer>{

//     Optional<User> findByEmail(String email);

//     void deleteByEmail(String email);

//     @Modifying
//     @Query("UPDATE user SET first_name = :#{#user.firstName}, last_name = :#{#user.lastName}, email = :#{#user.email}, password = :#{#user.password} WHERE email = :email")
//     void updateUser(@Param("user") User user, @Param("email") String email);


    
// }