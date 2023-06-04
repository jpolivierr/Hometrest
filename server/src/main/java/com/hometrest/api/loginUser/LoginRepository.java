package com.hometrest.api.loginUser;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.hometrest.ExceptionApi.UserNotFoundException;

@Repository
public class LoginRepository {
    
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public  LoginRepository(JdbcTemplate jsJdbcTemplate){
        this.jdbcTemplate = jsJdbcTemplate;
    }

    public boolean mapRow(ResultSet rs, int rowNum) throws SQLException {
    
        return rs.getBoolean("result");

    }

    public boolean logIn(String email, String password){


        String query = "SELECT COUNT(*) FROM users WHERE email = ? AND user_password = ?";

        // RowMapper<Boolean> booleanRowMapper = (rs, rowNum) -> rs.getBoolean("result");
        
        boolean count = jdbcTemplate.queryForObject(query, Boolean.class, email, password);
        
        // If count is greater than 0, user credentials are valid

        if (!count) throw new UserNotFoundException();

        return count;
    }


}
