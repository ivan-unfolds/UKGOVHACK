require('env2')('./config.env')

import Hapi from 'hapi'
const server = new Hapi.Server()
const port = process.env.PORT || 4000

// helper methods
import { handlePlugins, handleStart } from './helpers/server-helpers.js'

// server plugins
import Inert from 'inert'
import Bell from 'bell'
import AuthCookie from 'hapi-auth-cookie'

// server routes
import Images from './routes/Images.js'
import ReactUrls from './routes/ReactUrls.js'
import Scripts from './routes/Scripts.js'
import NewAnswer from './routes/newAnswer.js'
import GetAllAnswers from './routes/GetAllAnswers.js'
import Login from './routes/Login.js'
import UserDetails from './routes/UserDetails.js'
import ChangeScore from './routes/changeScore.js'

// auth strategies
import { TwitterCookie, TwitterOauth } from './authStrategies/twitterAuthStrategies.js'

const ConnectionSettings = { port, routes: {cors: true} }
const Plugins = [ Inert, Bell, AuthCookie ]
const Routes = [ Login, UserDetails, NewAnswer, GetAllAnswers, Images, ReactUrls, Scripts, ChangeScore ]

server.connection(ConnectionSettings)
server.register(Plugins, handlePlugins)
server.auth.strategy('twitter', 'bell', TwitterOauth)
server.auth.strategy('session', 'cookie', TwitterCookie)
server.route(Routes)
server.start(handleStart)

export default server
