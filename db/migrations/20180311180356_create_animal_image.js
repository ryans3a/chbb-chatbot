'use strict'

exports.up = function(knex, Promise) {
  
  return knex.schema.createTable('animalImage', (table) => {

    table.increments()
    table.integer('animalId').unsigned()
    table.foreign('animalId').references('animal.id')
    table.string('imagePath', 200).notNullable()
  })
}

exports.down = function(knex, Promise) {
  
  return knex.schema.dropTable('animalImage')
}
