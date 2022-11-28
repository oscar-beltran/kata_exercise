package com.example.springblogexample.controller;

import com.example.springblogexample.repository.entities.CommentEntity;
import com.example.springblogexample.repository.entities.TagEntity;
import com.example.springblogexample.repository.entities.UserEntity;
import com.example.springblogexample.services.ICommentService;
import com.example.springblogexample.services.ITagService;
import com.example.springblogexample.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/blog")
public class BlogController {

    @Autowired
    public ICommentService commentService;
    @Autowired
    public ITagService tagService;
    @Autowired
    public IUserService userService;

    @GetMapping("/health")
    public String health() {
        return "OK";
    }

    @GetMapping("/users")
    public List<UserEntity> getAllUsers(@RequestHeader(value = "rqUuid") String rqUuid) {
        return userService.getAllUsers(rqUuid);
    }

    @GetMapping("/comments")
    public List<CommentEntity> getAllComments(@RequestHeader(value = "rqUuid") String rqUuid) {
        return commentService.getAllComments(rqUuid);
    }

    @GetMapping("/tags")
    public List<TagEntity> getAllTags(@RequestHeader(value = "rqUuid") String rqUuid) {
        return tagService.getAllTags(rqUuid);
    }

}
