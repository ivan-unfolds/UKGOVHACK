import client from './client.js'
import Bluebird from 'bluebird'

client.LPUSH = Bluebird.promisify(client.LPUSH)
client.LRANGE = Bluebird.promisify(client.LRANGE)

export const addNewAnswer = (answerObj) => {
  answerObj.id = Date.now()
  answerObj.score = 0
  answerObj.comments = []
  answerObj.tags = typeof answerObj.tags === 'object' ? answerObj.tags : [answerObj.tags]
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

export const increaseScore = (hash) => {
  client.hgetall(hash, (err, hashObj) => {
    if (err) console.log(err)
    else {
      console.log(hash, '<<<HASH')
      const newScore = +hashObj.score + 1
      client.HSET(hash, 'score', newScore, (err, reply) => {
        if (err) console.log(err)
        else console.log('Increased score to ' + newScore)
      })
    }
  })
}

