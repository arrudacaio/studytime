const knex = require('../database')
const { query } = require('express')
const { create } = require('./UserController')


module.exports = {

    async index(req, res, next) {
        try {
            const { user_id, page = 1 } = req.query

            const query = knex('subjects').limit(5).offset((page - 1) * 5) // Paginação

            const countObj = knex('subjects').count() // Total de matérias q existem


            if (user_id) {
                query
                    .where({ user_id: user_id })
                    .join('users', 'users.id', '=', 'subjects.user_id')
                    .select('subjects.*', 'users.username')

                countObj.where({ user_id })
            }

            const [count] = await countObj



            // Enviando dado através do header da response, para saber o total de matérias q tem
            res.header('X-Total-Count', count["count"])

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