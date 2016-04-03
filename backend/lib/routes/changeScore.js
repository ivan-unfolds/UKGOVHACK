import { increaseScore } from '../redis/redisFunctions.js'

export default {
  path: '/changeScore/{id}',
  method: 'GET',
  handler: (request, reply) => {
    console.log('REQUEST PARAMS: ', request.params)
    increaseScore(request.params.id)
    reply('success')
  }
}
