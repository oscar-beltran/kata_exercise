const Tag = require('../models/tag')
const db = require('../db/db_queries')

class TagRepository {
    constructor() {
        this.db = db
    }

    async getTags() {
        try {
            const tags = await this.db.getTags()
            return tags.map((tag) => {
                return new Tag(
                    tag.id,
                    tag.key,
                    tag.description
                )
            })
        } catch (err) {
            this.utils.logError(err)
            throw err
        }
    }
}

module.exports = TagRepository