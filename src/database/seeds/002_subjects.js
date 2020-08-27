exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('subjects')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('subjects').insert([{ user_id: 3, title: 'Node.js' }])
        })
}
