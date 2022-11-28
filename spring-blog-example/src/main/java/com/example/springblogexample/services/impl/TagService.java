package com.example.springblogexample.services.impl;

import com.example.springblogexample.repository.TagRepository;
import com.example.springblogexample.repository.entities.TagEntity;
import com.example.springblogexample.services.ITagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagService implements ITagService {

    @Autowired
    public TagRepository tagRepository;

    @Override
    public List<TagEntity> getAllTags(String rqUuid) {
        return tagRepository.findAll();
    }
}
