/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
<<<<<<< HEAD
  knex.schema.hasTable('users').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('homes', function (table) {
        table.increments('house_id').primary()
        table.string('title').notNullable()
        table.text('description')
        table.integer('guests')
        table.text('address')
        table.decimal('rental_price', 12, 2)
        table.boolean('active').defaultTo(true)
        table.timestamp('created_at').defaultTo(knex.fn.now())
      })
    }
  })
=======
    knex.schema.hasTable('users').then(function(exists) {
        if(!exists){
            return knex.schema.createTable('users', function (t) {
                t.increments('id').primary()
                t.string('first_name', 100)
                t.string('last_name', 100)
                t.text('bio')
            })
        }
    })
>>>>>>> 3b92131f4188fd4bf1fc349e09f856cef9e4b8b3
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

}
