package com.example.springblogexample.services;

import com.example.springblogexample.repository.entities.TagEntity;

import java.util.List;

public interface ITagService {
    List<TagEntity> getAllTags(String rqUuid);
}
