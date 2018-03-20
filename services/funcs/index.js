'use strict'

const _ = require('lodash')
const checkAnimal = require('./checkAnimal')
const noIntent = require('./noIntent')
const funcs = {
  'checkAnimal': checkAnimal, 
  'noIntent': noIntent
}

const parseResp = (resp) => {

  return new Promise((resolve, reject) => {
    
    switch(resp.rc) {
      
      case 0:
        // Open skills
        if (resp.answer) {

          if (resp.service === 'story') {

            return resolve({
              answer: resp.answer.text,
              url: _.map(resp.data.result, 'playUrl')
            })
          }
          resolve(resp.answer.text)
        } 
        else {
          // Self defined skills
          let vendor = resp.vendor
          let service = resp.service
          // let category = resp.category
          let pureService = service.replace(vendor, '').replace('.', '')
          let intent = resp.semantic[0].intent
          let entities = resp.semantic[0].slots
          
          if (!funcs[pureService]) {

            reject('小悠还在学习中，过段时间再来问我吧！')
          }
          funcs[pureService](intent, entities).then((text) => {
            resolve(text)
          })
          .catch(err => {
            reject(err)
          })
        }
        break;
      case 4: 
        reject(noIntent.notUnderstandAnswer())
        break;
      default:
        reject(new Error('RC not recognized'))
    }
  })
}

module.exports = {
  parseResp
}