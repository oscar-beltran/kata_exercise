const User = require('../models/user')
const db = require('../db/db_queries')

class UserRepository {
    constructor() {
        this.db = db
    }

    async getUsers() {
        try {
            const users = await this.db.getUsers()
            return users.map((user) => {
                return new User(
                    user.user_uuid,
                    user.nickname,
                    user.email,
                    user.password_md5_hash,
                    user.signature,
                    user.registered_at,
                )
            })
        } catch (err) {
            this.utils.logError(err)
            throw err
        }
    }
}

module.exports = UserRepository