'use strict'

const md5 = require('md5')
const config = require('config')
const aiuiConfig = config.get('aiuiConfig')
const request = require('request')

module.exports = (next) => {
  //讯飞开放平台注册申请应用的应用ID(APPID)
  var xAppid = aiuiConfig.APP_ID
  console.log('X-Appid:' + xAppid)

  var timestamp = Date.parse(new Date())
  var curTime = timestamp / 1000
  console.log('X-CurTime:' + curTime)

  var xParam = {
    "userid": "user_0001",
    "scene": "main"
  }
  xParam = JSON.stringify(xParam)
  var xParamBase64 = new Buffer(xParam).toString('base64')
  console.log('X-Param:' + xParamBase64)

  // 问题
  var text = "什么是小狗？"
  var textBase64 = Buffer.from(text).toString('base64')
  var bodyData = "text=" + textBase64
  console.log('body: ' + bodyData)

  var apiKey = aiuiConfig.API_KEY
  var token = apiKey + curTime + xParamBase64 + bodyData

  console.log('token: ' + token)
  var xCheckSum = md5(token)
  console.log('X-CheckSum:' + xCheckSum)

  let url = aiuiConfig.AIUI_HOST + aiuiConfig.TEXT_SEMANTIC_ENDPOINT

  let options = {
    url: url,
    method: 'POST',
    headers: {
      "X-Appid": xAppid,
      "X-CurTime": curTime,
      "X-Param": xParamBase64,
      "X-CheckSum": xCheckSum,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept-Charset': 'UTF-8'
    },
    body: bodyData
  }

  request.post(options, function (err, response, body) {

    if (err) {
      console.log(err)
    }
    console.log(response)
    console.log(body)
    next(body)
  })
}
