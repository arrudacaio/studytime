exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id')
        table.text('username').unique().notNullable()

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('users')
}
