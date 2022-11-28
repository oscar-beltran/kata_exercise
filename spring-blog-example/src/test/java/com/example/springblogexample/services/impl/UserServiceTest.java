package com.example.springblogexample.services.impl;

import com.example.springblogexample.Builder;
import com.example.springblogexample.repository.UserRepository;
import com.example.springblogexample.repository.entities.UserEntity;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;
import java.util.UUID;

import static org.mockito.Mockito.*;

class UserServiceTest {

    private String rqUuid = UUID.randomUUID().toString();

    @Mock
    UserRepository userRepository;
    @InjectMocks
    UserService userService;

    private static List<UserEntity> users;

    @BeforeAll
    static void setUpAll() {
        users = List.of(
            Builder.user(), 
            Builder.user()
        );
        
    }

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    @DisplayName(
        "DADO que se cuenta con información de los usuarios almacenados en base de datos " +
        "CUANDO se solicite recuperar toda la información " +
        "ENTONCES se obtendrán todos los usuarios")
    void testGetAllTags() {
        when(userRepository.findAll()).thenReturn(users);
        try {
            List<UserEntity> result = userService.getAllUsers(rqUuid);
            Assertions.assertFalse(result.isEmpty());
            Assertions.assertEquals(users.size(), result.size());
        } catch (Exception e) {
            Assertions.fail(e.getMessage());
        }
    }

}
