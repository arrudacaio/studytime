const knex = require('../database')
const { query } = require('express')
const { create } = require('./UserController')


module.exports = {

    async index(req, res, next) {
        try {
            const { user_id } = req.query
            const query = knex('subjects')
            if (user_id) {
                query
                    .where({ user_id: user_id })
                    .join('users', 'users.id', '=', 'subjects.user_id')
                    .select('subjects.*', 'users.username')
            }

            const results = await query
            return res.json(results)
        } catch (error) {
            next(error)
        }
    },

    async create(req, res, next) {
        try {
            const { title, user_id } = req.body
            await knex('subjects').insert({
                title,
                user_id
            })

            return res.status(201).send()



        } catch (error) {
            next(error)
        }
    }

}