'use strict'

exports.up = function(knex, Promise) {
  
  return knex.schema.createTable('animalAudio', (table) => {

    table.increments()
    table.integer('animalId').unsigned()
    table.foreign('animalId').references('animal.id')
    table.string('audioPath', 200).notNullable()
  })
}

exports.down = function(knex, Promise) {
  
  return knex.schema.dropTable('animalAudio')
}
