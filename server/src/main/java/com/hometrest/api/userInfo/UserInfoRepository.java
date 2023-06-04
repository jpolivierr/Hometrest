package com.hometrest.api.userInfo;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.JsonProcessingException;


@Repository
public class UserInfoRepository{

    private final JdbcTemplate jdbcTemplate;
    ObjectMapper objectMapper = new ObjectMapper();

    @Autowired
    public  UserInfoRepository(JdbcTemplate jsJdbcTemplate){
        this.jdbcTemplate = jsJdbcTemplate;
    }

    public UserInfo mapRow(ResultSet rs, int rowNum) throws SQLException {
        UserInfo user = new UserInfo();
        user.setFirstName(rs.getString("first_name"));
        user.setLastName(rs.getString("last_name"));
        user.setEmail(rs.getString("email"));
        return user;
    }

    public UserInfo getUserByEmail(String email){

        String sql = "CALL getUser(?)";

        UserInfo userTemplate = jdbcTemplate.queryForObject(sql, this::mapRow, email);

        String result = "";

        try {

            result = objectMapper.writeValueAsString(userTemplate);

        } catch (JsonProcessingException e) {

            e.printStackTrace();

        }

        return userTemplate;
    }


}
