const express = require('express')
const bodyParser = require('body-parser')
const utils = require('./utils/util_time')
const app = express()
const port = 8765

const con_comment = require('./controllers/comment.controller')
const con_user = require('./controllers/user.controller')
const con_tag = require('./controllers/tag.controller')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    console.log('GET / ' + utils.getActualDate())
    response.json({ info: 'Blog API Running...' })
})
app.get('/blog/health', (request, response) => {
    console.log('GET /blog/health ' + utils.getActualDate())
    response.status(200).send('OK')
})

/* DECLARACION FUNCIONES BASE */
app.get('/blog/comments', con_comment.getComments)
app.get('/blog/users', con_user.getUsers)
app.get('/blog/users/:id', con_user.getUser)
app.get('/blog/tags', con_tag.getTags)

app.listen(port, () => {
    console.log('----------------------------------------')
    console.log(`Blog API running on port [${port}]`)
    console.log('----------------------------------------')
})