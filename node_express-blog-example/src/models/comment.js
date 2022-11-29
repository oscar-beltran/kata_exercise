class Comment{
    constructor(commentUuid, postUuid, content, published, createdAt){
        this.commentUuid = commentUuid
        this.postUuid = postUuid
        this.content = content
        this.published = published
        this.createdAt = createdAt
    }

    getUUID(){
        return this.commentUuid
    }

    getPostUUID(){
        return this.postUuid
    }

    getContent(){
        return this.content
    }

    getPublished(){
        return this.published
    }

    getCreatedAt(){
        return this.createdAt
    }
}

module.exports = Comment