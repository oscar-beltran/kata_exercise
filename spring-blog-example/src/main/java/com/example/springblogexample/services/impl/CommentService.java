package com.example.springblogexample.services.impl;

import com.example.springblogexample.repository.CommentRepository;
import com.example.springblogexample.repository.entities.CommentEntity;
import com.example.springblogexample.services.ICommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService implements ICommentService {

    @Autowired
    public CommentRepository commentRepository;

    @Override
    public List<CommentEntity> getAllComments(String rqUuid) {
        return commentRepository.findAll();
    }

}
