import client from './client.js'
import Bluebird from 'bluebird'

client.LPUSH = Bluebird.promisify(client.LPUSH)
client.LRANGE = Bluebird.promisify(client.LRANGE)

export const addNewAnswer = (answerObj) => {
  answerObj.id = Date.now()
  Object.keys(answerObj).forEach((prop) => {
    const value = typeof answerObj[prop] === 'object' ? JSON.stringify(answerObj[prop]) : answerObj[prop]
    client.HSET(answerObj.id, prop, value)
  })
}

export const getAllAnswers = (cb) => {
  client.keys('*', (err, reply) => {
    if (err) console.log(err)
    else {
      let emptyArr = []
      reply.map((hash) => {
        client.hgetall(hash, (err, hashObj) => {
          if (err) console.log(err)
          else {
            emptyArr.push(hashObj)
            if (emptyArr.length === reply.length) cb(emptyArr)
          }
        })
      })
    }
  })
}
