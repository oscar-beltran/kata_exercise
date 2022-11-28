package com.example.springblogexample.services.impl;

import com.example.springblogexample.repository.UserRepository;
import com.example.springblogexample.repository.entities.UserEntity;
import com.example.springblogexample.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService {

    @Autowired
    public UserRepository userRepository;


    @Override
    public List<UserEntity> getAllUsers(String rqUuid) {
        return userRepository.findAll();
    }
}
