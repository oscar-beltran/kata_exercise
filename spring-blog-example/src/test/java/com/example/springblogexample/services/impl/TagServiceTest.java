package com.example.springblogexample.services.impl;

import com.example.springblogexample.Builder;
import com.example.springblogexample.repository.TagRepository;
import com.example.springblogexample.repository.entities.TagEntity;

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

class TagServiceTest {

    private String rqUuid = UUID.randomUUID().toString();

    @Mock
    TagRepository tagRepository;
    @InjectMocks
    TagService tagService;

    private static List<TagEntity> tags;

    @BeforeAll
    static void setUpAll() {
        tags = List.of(
            Builder.tag(), 
            Builder.tag()
        );
        
    }

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    @DisplayName(
        "DADO que se cuenta con información de las etiquetas almacenadas en base de datos " +
        "CUANDO se solicite recuperar toda la información " +
        "ENTONCES se obtendrán todas las etiquetas")
    void testGetAllTags() {
        when(tagRepository.findAll()).thenReturn(tags);
        try {
            List<TagEntity> result = tagService.getAllTags(rqUuid);
            Assertions.assertFalse(result.isEmpty());
            Assertions.assertEquals(tags.size(), result.size());
        } catch (Exception e) {
            Assertions.fail(e.getMessage());
        }
    }

}
