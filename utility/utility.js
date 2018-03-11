'use strict'

module.exports.getRandomInt = (max) => {
  
  return Math.floor(Math.random() * Math.floor(max))
}

module.exports.getRandomAnswer = (answers) => {

  return answers[Math.floor(Math.random() * Math.floor(answers.length))]
}