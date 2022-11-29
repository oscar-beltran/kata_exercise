const Pool = require('pg').Pool
const pool = new Pool({
    user: 'blog_db_user',
    host: 'localhost',
    database: 'postgres',
    password: 'blog_db_password',
    port: 25432,
})

const getComments = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM post_comment ORDER BY post_uuid ASC', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows)
        })
    })
}

const getUsers = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM blog_user ORDER BY user_uuid ASC', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows)
        })
    })
}

const getTags = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM tag ORDER BY id ASC', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows)
        })
    })
}


module.exports = {
    getComments,
    getUsers,
    getTags,
}