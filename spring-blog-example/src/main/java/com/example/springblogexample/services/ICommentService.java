package com.example.springblogexample.services;

import com.example.springblogexample.repository.entities.CommentEntity;

import java.util.List;

public interface ICommentService {
    List<CommentEntity> getAllComments(String rqUuid);
}
