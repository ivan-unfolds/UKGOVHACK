import { addNewAnswer } from '../redis/redisFunctions.js'

export default {
  path: '/newAnswer',
  method: 'POST',
  handler: (request, reply) => {
    addNewAnswer(request.payload)
    reply.redirect('/')
  }
}
