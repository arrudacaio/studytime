const express = require('express')
const knex = require('./database')
const UserController = require('./controllers/UserController')
const routes = express.Router()

routes.get('/users', UserController.index)

module.exports = routes
