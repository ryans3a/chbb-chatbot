'use strict'

const md5 = require('md5')
const fs = require('fs')
const Promise = require('bluebird')
const request = require('request')
const config = require('config')
const aiuiConfig = config.get('aiuiConfig')
const url = aiuiConfig.AIUI_HOST + aiuiConfig.AUDIO_SEMANTIC_ENDPOINT
const path = require('path')

module.exports = (audioPath) => {

  return new Promise((resolve, reject) => {

    //讯飞开放平台注册申请应用的应用ID(APPID)
    var xAppid = aiuiConfig.APP_ID

    var timestamp = Date.parse(new Date())
    var curTime = timestamp / 1000

    var xParam = {
      "auf": "16k",
      "aue": "raw",
      "scene": "main",
      "userid": "user_0001"
    }
    xParam = JSON.stringify(xParam)
    var xParamBase64 = new Buffer(xParam).toString('base64')

    //音频文件
    var fileData = fs.readFileSync(path.join(__dirname, '../../', audioPath))
    var fileBase64 = new Buffer(fileData).toString('base64')
    var bodyData = "data=" + fileBase64

    //ApiKey创建应用时自动生成
    var apiKey = aiuiConfig.API_KEY
    var token = apiKey + curTime + xParamBase64 + bodyData
    
    var xCheckSum = md5(token)
    
    var options = {
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
        return reject(err)
      }
      console.log(body)
      resolve(body)
    })
  })
}