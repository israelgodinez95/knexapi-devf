/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
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
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('homes').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('homes')
    }
  })
}

/*
Crear una migracion
knex migrate:make nombre_de_la_migracion

ejecuitar las migraciones sobre exports.up
knex:migrate:latest
para ejecutar todas las migraciones knex:migrate:up
ejecutar una migracion especifica knex migrate:up nombre_de_la_migracion.js

Ejecutar las migraciones sobre exports down
al hacer esto estamos eliminando o modificando la tabla de la base de datos al que le hicimos cambios en exports up
deshacer la ultima migracion (down): knex miograte:rollback latest
deshacer todas las migraciones (down): knex migrate:rollback
deshacer una migracion especifica (down): knex migrate:down nombre_de_la_migracion.js

*/
