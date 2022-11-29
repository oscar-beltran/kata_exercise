const db = require('../db/db_queries')
const utils = require('../utils/util_time')

const getUsers = async (req, res) => {
    //PRINT REQUEST INFO
    console.log('GET /blog/users ' + utils.getActualDate())
    if(!req.headers.rquuid){
        res.status(400).send('Bad Request, missing rqUuid header')
        return
    }
    try{
        const users = await db.getUsers()
        res.status(200).json(users)
    } catch(err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
}

module.exports = {
    getUsers,
}
