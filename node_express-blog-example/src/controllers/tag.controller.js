const utils = require('../utils/util_time')
const TagRepository = require('../repository/tag.repository')

const getTags = async (req, res) => {
    //PRINT REQUEST INFO
    console.log('GET /blog/tags ' + utils.getActualDate())
    if(!req.headers.rquuid){
        res.status(400).send('Bad Request, missing rqUuid header')
        return
    }
    try{
        const tag_rep = new TagRepository(utils)
        const tags = await tag_rep.getTags()
        res.status(200).json(tags)
    } catch(err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
}

module.exports = {
    getTags,
}
