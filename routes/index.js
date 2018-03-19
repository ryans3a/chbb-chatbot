'use strict'

const express = require('express')
const router = express.Router()
const test = require('../services/test')
const textSementic = require('../services/textSementic')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' })
})

router.get('/textSementic', function(req, res) {
  
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  let query = req.query.q

  textSementic(query, function(resp) {
    res.json(JSON.parse(resp))
  })
})

router.get('/audioSementic', function(req, res) {

})

router.get('/test', function(req, res) {

  test(function(body) {
    res.send('finish')
  })
})

module.exports = router
