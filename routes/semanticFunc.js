'use strict'

const express = require('express')
const router = express.Router()
const funcs = require('../services/funcs/index')

router.post('/', function (req, res) {

  let service = req.body.service
  let vendor = req.body.vendor
  let text = req.body.query
  let intent = req.body.intent

  let serviceEndpoint = service.replace(vendor, '')
  let semaFunc = funcs[serviceEndpoint]

})

module.exports = router