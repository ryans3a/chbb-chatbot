'use strict'

const db = require('../db/connection')

const logQuery = (query, ip, querySuccess) => {

  return db('queryLog').insert({
    query: query,
    userIp: ip,
    querySuccess: querySuccess
  })
}

module.exports = {
  logQuery
}