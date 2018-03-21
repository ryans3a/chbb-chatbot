'use strict'

var ffmpeg = require('fluent-ffmpeg')

const _ = require('lodash')

module.exports.getRandomInt = (max) => {

  return _.random(max)
}

module.exports.getRandomAnswer = (answers) => {

  return answers[_.random(answers.length - 1)]
}

module.exports.convertAudio = (audioPath, outputPath) => {

  return new Promise(function (resolve, reject) {

    ffmpeg(audioPath)
      .addOption('-ar', 16000)
      .addOption('-ac', 1)
      .save(outputPath)
      .on('error', function (err) {
        console.log('An error occurred: ' + err.message);
        reject(err)
      })
      .on('end', function () {
        console.log('Processing finished !');
        resolve(outputPath)
      })
  })
}