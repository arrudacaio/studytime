const express = require('express')
const knex = require('./database')
const UserController = require('./controllers/UserController')
const SubjectController = require('./controllers/SubjectController')
const routes = express.Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

routes.get('/subjects', SubjectController.index)
routes.post('/subjects', SubjectController.create)


module.exports = routes
