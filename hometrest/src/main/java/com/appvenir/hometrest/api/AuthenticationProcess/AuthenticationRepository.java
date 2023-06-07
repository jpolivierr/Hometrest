package com.appvenir.hometrest.api.AuthenticationProcess;

// import java.sql.ResultSet;
// import java.sql.SQLException;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.jdbc.core.JdbcTemplate;
// import org.springframework.stereotype.Repository;

// import com.appvenir.hometrest.Exceptions.UserNotFoundException;

// @Repository
public class AuthenticationRepository {
    
    // private final JdbcTemplate jdbcTemplate;

    // @Autowired
    // public  AuthenticationRepository(JdbcTemplate jsJdbcTemplate){
    //     this.jdbcTemplate = jsJdbcTemplate;
    // }

    // public boolean mapRow(ResultSet rs, int rowNum) throws SQLException {
    
    //     return rs.getBoolean("result");

    // }

    // public boolean logIn(String email, String password){

    //     String query = "SELECT COUNT(*) FROM users WHERE email = ? AND user_password = ?";
        
    //     boolean count = jdbcTemplate.queryForObject(query, Boolean.class, email, password);

    //     if (!count) throw new UserNotFoundException();

    //     return count;
    // }


}
