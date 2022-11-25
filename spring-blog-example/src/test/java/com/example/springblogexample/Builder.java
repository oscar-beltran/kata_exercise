package com.example.springblogexample;

import java.time.LocalDateTime;
import java.util.UUID;

import com.example.springblogexample.repository.entities.CommentEntity;
import com.example.springblogexample.repository.entities.TagEntity;
import com.example.springblogexample.repository.entities.UserEntity;

public class Builder {


    public static CommentEntity comment(boolean published) {
        CommentEntity entity = new CommentEntity();
        entity.setCommentUuid(UUID.randomUUID().toString());
        entity.setPostUuid(UUID.randomUUID().toString());
        entity.setContent("Donec eu suscipit elit. Curabitur ut elit eu ligula hendrerit malesuada eget eget risus. Vestibulum ut efficitur nibh. Sed malesuada accumsan libero at aliquet. Donec in velit sit amet nunc pretium egestas.");
        entity.setPublished(published);
        entity.setCreatedAt(LocalDateTime.now());
        return entity;
    }
    
    public static TagEntity tag() {
        TagEntity entity = new TagEntity();
        entity.setId(1);
        entity.setKey("TEST");
        entity.setDescription("Etiqueta de prueba");
        return entity;
    }

    public static UserEntity user() {
        UserEntity entity = new UserEntity();
        entity.setUserUuid(UUID.randomUUID().toString());
        entity.setNickname("admin");
        entity.setEmail("admin@mail.com");
        entity.setPasswordMd5Hash("20838a8df7cc0babd745c7af4b7d94e2");
        entity.setSignature("test");
        entity.setRegisteredAt(LocalDateTime.now());
        return entity;
    }
    
}
