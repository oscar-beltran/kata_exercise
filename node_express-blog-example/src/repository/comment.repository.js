const Comment = require('../models/comment')
const db = require('../db/db_queries')

class CommentRepository {
    constructor() {
        this.db = db
    }

    async getComments() {
        try {
            const comments = await this.db.getComments()
            return comments.map((comment) => {
                return new Comment(
                    comment.comment_uuid,
                    comment.post_uuid,
                    comment.content,
                    comment.published,
                    comment.created_at
                )
            })
        } catch (err) {
            this.utils.logError(err)
            throw err
        }
    }
}

module.exports = CommentRepository