const utils = require('../utils/util_time')
const UserRepository = require('../repository/user.repository')

const getUsers = async (req, res) => {
    //PRINT REQUEST INFO
    console.log('GET /blog/users ' + utils.getActualDate())
    if(!req.headers.rquuid){
        res.status(400).send('Bad Request, missing rqUuid header')
        return
    }
    try{
        const user_rep = new UserRepository()
        const users = await user_rep.getUsers()
        res.status(200).json(users)
    } catch(err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
}

const getUser = async (req, res) => {
    //PRINT REQUEST INFO
    console.log('GET /blog/users/:id ' + utils.getActualDate())
    if(!req.headers.rquuid){
        res.status(400).send('Bad Request, missing rqUuid header')
        return
    }

    try{
        const user_rep = new UserRepository()
        const user = await user_rep.getUser(req.params.id)
        res.status(200).json(user)
    } catch(err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
}

module.exports = {
    getUsers,
    getUser,
}
