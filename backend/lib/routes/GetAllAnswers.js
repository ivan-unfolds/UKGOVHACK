import { getAllAnswers } from '../redis/redisFunctions.js'

export default {
  path: '/getAllAnswers',
  method: 'GET',
  handler: (request, reply) => {
    getAllAnswers((allTheAnswers) => {
      reply(JSON.stringify(allTheAnswers))
    })
  }
}
