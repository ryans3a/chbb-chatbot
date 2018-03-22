'use strict'

const _ = require('lodash')
const utility = require('../../utility/utility')
const Promise = require('bluebird')

const notUnderstandAnswer = () => {

  let resp = [
    '对不起，小悠没有听懂你的问题。。',
    '能换个方式再问小悠一遍吗？',
    '不好意思，小悠没听明白。。',
  ]

  return utility.getRandomAnswer(resp)
}

module.exports = {
  notUnderstandAnswer
}