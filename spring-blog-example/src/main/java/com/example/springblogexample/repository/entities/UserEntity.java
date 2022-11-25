package com.example.springblogexample.repository.entities;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "blog_user")
public class UserEntity {

    @Id
    @Column(name = "user_uuid")
    private String userUuid;
    @Column(name = "nickname")
    private String nickname;
    @Column(name = "email")
    private String email;
    @Column(name = "password_md5_hash")
    private String password_md5_hash;
    @Column(name = "signature")
    private String signature;
    @Column(name = "registered_at")
    private LocalDateTime registeredAt;

    public String getUserUuid() {
        return userUuid;
    }

    public void setUserUuid(String userUuid) {
        this.userUuid = userUuid;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword_md5_hash() {
        return password_md5_hash;
    }

    public void setPassword_md5_hash(String password_md5_hash) {
        this.password_md5_hash = password_md5_hash;
    }

    public String getSignature() {
        return signature;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }

    public LocalDateTime getRegisteredAt() {
        return registeredAt;
    }

    public void setRegisteredAt(LocalDateTime registeredAt) {
        this.registeredAt = registeredAt;
    }

}
