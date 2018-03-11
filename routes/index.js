'use strict'

const express = require('express')
const router = express.Router()
const test = require('../services/test')
const textSementic = require('../services/textSementic')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' })
})

router.get('/test', function(req, res) {

  test(function(body) {
    res.send('finish')
  })
})

module.exports = router
