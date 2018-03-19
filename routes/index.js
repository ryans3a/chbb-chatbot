'use strict'

const express = require('express')
const router = express.Router()
const textSementicService = require('../services/aiui/textSementic')
const logQuery = require('../services/logService').logQuery
const parseResp = require('../services/funcs/').parseResp

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {
    title: 'Express'
  })
})

router.get('/textSementic', function (req, res) {

  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  let query = req.query.q

  textSementicService(query).then((data) => {

    // Process resp
    let resp = JSON.parse(data).data

    parseResp(resp).then((answer) => {

        logQuery(query, ip, true).then(() => {

          res.json(answer)
        })
      })
      .catch((err) => {

        logQuery(query, ip, false).then(() => {
          
          res.send(err)
        })
      })
  }).catch((err) => {
    logQuery(query, ip, false)
    return res.json({
      'error': err
    })
  })
})

router.get('/audioSementic', function (req, res) {

  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  let query = req.query.q

})

router.get('/test', function (req, res) {

  test(function (body) {
    res.send('finish')
  })
})

module.exports = router