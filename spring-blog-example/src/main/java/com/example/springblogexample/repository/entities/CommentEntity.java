package com.example.springblogexample.repository.entities;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "post_comment")
public class CommentEntity {

    @Id
    @Column(name = "comment_uuid")
    private String commentUuid;
    @Column(name = "post_uuid")
    private String postUuid;
    @Column(name = "content")
    private String content;
    @Column(name = "published")
    private boolean published;
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    public String getCommentUuid() {
        return commentUuid;
    }

    public void setCommentUuid(String commentUuid) {
        this.commentUuid = commentUuid;
    }

    public String getPostUuid() {
        return postUuid;
    }

    public void setPostUuid(String postUuid) {
        this.postUuid = postUuid;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public boolean isPublished() {
        return published;
    }

    public void setPublished(boolean published) {
        this.published = published;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

}
