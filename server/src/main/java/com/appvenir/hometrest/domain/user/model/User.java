package com.appvenir.hometrest.domain.user.model;

import java.util.HashSet;
import java.util.Set;

import com.appvenir.hometrest.domain.common.Auditable;
import com.appvenir.hometrest.domain.property.model.LikedProperty;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="users")
@Getter
@Setter
@NoArgsConstructor
public class User extends Auditable{

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(unique = true, name = "email", nullable = false)
    private String email;

    @Column(name = "password")
    private String password;

    @ManyToMany(mappedBy = "users", fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE})
    private Set<LikedProperty> likedProperties = new HashSet<>();

    public void addLikedProperty(LikedProperty likedProperty) {
        likedProperties.add(likedProperty);
        likedProperty.getUsers().add(this);
    }

    
}
