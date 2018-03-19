'use strict'

exports.up = function(knex, Promise) {

  return knex.schema.createTable('queryLog', (table) => {

    table.string('query', 100).notNullable()
    table.string('userIp', 100)
    table.timestamp('createdAt').defaultTo(knex.fn.now())
    table.boolean('querySuccess').defaultTo(false)
  })
}

exports.down = function(knex, Promise) {
  
  return knex.schema.dropTable('queryLog')
}
