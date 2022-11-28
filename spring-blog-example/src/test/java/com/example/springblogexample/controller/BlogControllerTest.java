package com.example.springblogexample.controller;

import com.example.springblogexample.Builder;
import com.example.springblogexample.repository.entities.CommentEntity;
import com.example.springblogexample.repository.entities.TagEntity;
import com.example.springblogexample.repository.entities.UserEntity;
import com.example.springblogexample.services.ICommentService;
import com.example.springblogexample.services.ITagService;
import com.example.springblogexample.services.IUserService;
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

class BlogControllerTest {

    private String rqUuid = UUID.randomUUID().toString();

    @Mock
    ICommentService commentService;
    @Mock
    ITagService tagService;
    @Mock
    IUserService userService;
    @InjectMocks
    BlogController blogController;

    private static List<CommentEntity> comments;
    private static List<TagEntity> tags;
    private static List<UserEntity> users;    

    @BeforeAll
    static void setUpAll() {
        comments = List.of(
            Builder.comment(true), 
            Builder.comment(false)
        );
        tags = List.of(
            Builder.tag(), 
            Builder.tag()
        );
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
        "DADO que el componente está en ejecución " +
        "CUANDO se realice una consulta al servicio de /health " +
        "ENTONCES se obtendrán una respuesta exitosa")
    void testHealth() {
        String result = blogController.health();
        Assertions.assertEquals("OK", result);
    }

    @Test
    @DisplayName(
        "DADO que el componente está en ejecución " +
        "CUANDO se realice una consulta al servicio de /users " +
        "ENTONCES se obtendrán una respuesta exitosa con la información de los usuarios")
    void testGetAllUsers() {
        when(userService.getAllUsers(anyString())).thenReturn(users);

        List<UserEntity> result = blogController.getAllUsers(rqUuid);
        Assertions.assertFalse(result.isEmpty());
        Assertions.assertEquals(users.size(), result.size());
    }

    @Test
    @DisplayName(
        "DADO que el componente está en ejecución " +
        "CUANDO se realice una consulta al servicio de /comments " +
        "ENTONCES se obtendrán una respuesta exitosa con la información de los comentarios")
    void testGetAllComments() {
        when(commentService.getAllComments(anyString())).thenReturn(comments);

        List<CommentEntity> result = blogController.getAllComments(rqUuid);
        Assertions.assertFalse(result.isEmpty());
        Assertions.assertEquals(comments.size(), result.size());
    }

    @Test
    @DisplayName(
        "DADO que el componente está en ejecución " +
        "CUANDO se realice una consulta al servicio de /tags " +
        "ENTONCES se obtendrán una respuesta exitosa con la información de las etiquetas")
    void testGetAllTags() {
        when(tagService.getAllTags(anyString())).thenReturn(tags);

        List<TagEntity> result = blogController.getAllTags(rqUuid);
        Assertions.assertFalse(result.isEmpty());
        Assertions.assertEquals(tags.size(), result.size());
    }

}
