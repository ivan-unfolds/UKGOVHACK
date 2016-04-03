import { removeHash } from '../redis/redisFunctions.js'

export default {
  path: '/removeHash/{id}',
  method: 'GET',
  handler: (request, reply) => {
    removeHash(request.params.id, () => {
      reply('flushed DB!')
    })
  }
}
