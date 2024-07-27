package com.appvenir.hometrest.domain.property.model;

import java.util.HashSet;
import java.util.Set;

import com.appvenir.hometrest.domain.common.Auditable;
import com.appvenir.hometrest.domain.user.model.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "liked_properties")
@Getter
@Setter
public class LikedProperty extends Auditable {

    @Column(name = "property_id", nullable = false)
    String propertyId;

    @JsonIgnore
    @ManyToMany(mappedBy = "likedProperties", cascade = {CascadeType.PERSIST, CascadeType.MERGE}, fetch = FetchType.EAGER)
    private Set<User> users = new HashSet<>();

    public void addUser(User user) {
        users.add(user);
    }
}

