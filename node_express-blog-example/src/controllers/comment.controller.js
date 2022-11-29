const db = require('../db/db_queries')
const utils = require('../utils/util_time')

const getComments = async (req, res) => {
    //PRINT REQUEST INFO
    console.log('GET /blog/comments ' + utils.getActualDate())
    if(!req.headers.rquuid){
        res.status(400).send('Bad Request, missing rqUuid header')
        return
    }
    try{
        const comments = await db.getComments()
        res.status(200).json(comments)
    } catch(err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
}

module.exports = {
    getComments,
}

