package com.appvenir.hometrest.api.user;

import org.springframework.data.annotation.Id;
import org.springframework.data.jdbc.core.mapping.AggregateReference;

public class UserLikes {

    @Id
    private Integer id;

    private String propertyId;

    private AggregateReference<User, Integer> user;
    
    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPropertyId() {
        return this.propertyId;
    }

    public void setPropertyId(String propertyId) {
        this.propertyId = propertyId;
    }
}
