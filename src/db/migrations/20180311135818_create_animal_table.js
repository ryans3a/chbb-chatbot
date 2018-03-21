'use strict'

exports.up = function(knex, Promise) {
  
  return knex.schema.createTable('animal', (table) => {

    table.increments()
    table.string('animalName', 100).notNullable()
    table.string('desc', 500).notNullable()
  })
};

exports.down = function(knex, Promise) {
  
  return knex.schema.dropTable('animal')
};
