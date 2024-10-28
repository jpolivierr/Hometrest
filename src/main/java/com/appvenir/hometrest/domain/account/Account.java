package com.appvenir.hometrest.domain.account;

import java.util.UUID;

import com.appvenir.hometrest.domain.common.AuditableTimeStamp;
import com.appvenir.hometrest.domain.user.model.User;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "accounts")
@Getter
@Setter
public class Account extends AuditableTimeStamp{

    @Id
    @Column(name = "account_id", nullable = false, updatable = false, unique = true)
    private String accountId;

    @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.REMOVE}, orphanRemoval = true)
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)
    private User user;

    @Enumerated(EnumType.STRING)
    @Column(name = "account_type", nullable = false)
    private AccountType accountType;

    @PrePersist
    public void generateAccountId()
    {
        if(this.accountId == null)
        {
            this.accountId = UUID.randomUUID().toString();
        }
    }

    public Account(AccountType accountType)
    {
        this.accountType = accountType;
    }
    
}
