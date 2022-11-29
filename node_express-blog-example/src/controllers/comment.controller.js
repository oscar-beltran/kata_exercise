const utils = require('../utils/util_time')
const CommentRepository = require('../repository/comment.repository')

const getComments = async (req, res) => {
    //PRINT REQUEST INFO
    console.log('GET /blog/comments ' + utils.getActualDate())
    if(!req.headers.rquuid){
        res.status(400).send('Bad Request, missing rqUuid header')
        return
    }
    try{
        const comment_rep = new CommentRepository(utils)
        const comments = await comment_rep.getComments()
        res.status(200).json(comments)
    } catch(err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
}

module.exports = {
    getComments,
}

