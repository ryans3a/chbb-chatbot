'use strict'

const _ = require('lodash')

module.exports.getRandomInt = (max) => {
  
  return _.random(max)
}

module.exports.getRandomAnswer = (answers) => {

  return answers[_.random(answers.length - 1)]
}