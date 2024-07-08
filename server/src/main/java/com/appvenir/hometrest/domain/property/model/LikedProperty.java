package com.appvenir.hometrest.domain.property.model;

import java.util.HashSet;
import java.util.Set;

import com.appvenir.hometrest.domain.common.Auditable;
import com.appvenir.hometrest.domain.user.model.User;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "liked_properties")
@Getter
@Setter
public class LikedProperty extends Auditable{

    @Column(name = "property_id", nullable = false)
    String propertyId;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, fetch = FetchType.LAZY)
    @JoinTable(
        name = "user_liked_properties",
        joinColumns = @JoinColumn(name = "property_id"),
        inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private Set<User> users = new HashSet<>();
    
    public void addUser(User user){
        users.add(user);
    }
}
