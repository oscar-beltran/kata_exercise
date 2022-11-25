package com.example.springblogexample.services.impl;

import com.example.springblogexample.Builder;
import com.example.springblogexample.repository.CommentRepository;
import com.example.springblogexample.repository.entities.CommentEntity;
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

class CommentServiceTest {

    private String rqUuid = UUID.randomUUID().toString();

    @Mock
    CommentRepository commentRepository;
    @InjectMocks
    CommentService commentService;

    private static List<CommentEntity> comments;

    @BeforeAll
    static void setUpAll() {
        comments = List.of(
            Builder.comment(true), 
            Builder.comment(false)
        );
        
    }

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    @DisplayName(
        "DADO que se cuenta con información de los comentarios almacenados en base de datos " +
        "CUANDO se solicite recuperar toda la información " +
        "ENTONCES se obtendrán todos los comentarios")
    void testGetAllComments() {
        when(commentRepository.findAll()).thenReturn(comments);
        try {
            List<CommentEntity> result = commentService.getAllComments(rqUuid);
            Assertions.assertFalse(result.isEmpty());
            Assertions.assertEquals(comments.size(), result.size());
        } catch (Exception e) {
            Assertions.fail(e.getMessage());
        }
    }

}
