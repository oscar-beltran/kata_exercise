package com.example.springblogexample.services;

import com.example.springblogexample.repository.entities.UserEntity;

import java.util.List;

public interface IUserService {
    List<UserEntity> getAllUsers(String rqUuid);
}
