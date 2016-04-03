import redis from 'redis'

if (process.env.REDISTOGO_URL) {
  var rtg = require('url').parse(process.env.REDISTOGO_URL);
  var client = require('redis').createClient(rtg.port, rtg.hostname)
  client.auth(rtg.auth.split(':')[1])
} else {
  var client = require('redis').createClient()
}

client.select(0, () => {
  console.log('Connected to Redis database num 0')
})

export default client
