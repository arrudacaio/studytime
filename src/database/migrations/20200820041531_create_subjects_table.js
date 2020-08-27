exports.up = function (knex) {
    return knex.schema.createTable('subjects', (table) => {
        table.increments('id')
        table.text('title')

        // Relacionamento 1-N (Um usuário pode ter diversas matérias. e Se deletar o usuario, vai deletar todas materias dele )
        table
            .integer('user_id')
            .references('users.id')
            .notNullable()
            .onDelete('CASCADE')

        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('subjects')
}
