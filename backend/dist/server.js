'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _serverHelpers = require('./helpers/server-helpers.js');

var _inert = require('inert');

var _inert2 = _interopRequireDefault(_inert);

var _bell = require('bell');

var _bell2 = _interopRequireDefault(_bell);

var _hapiAuthCookie = require('hapi-auth-cookie');

var _hapiAuthCookie2 = _interopRequireDefault(_hapiAuthCookie);

var _Images = require('./routes/Images.js');

var _Images2 = _interopRequireDefault(_Images);

var _ReactUrls = require('./routes/ReactUrls.js');

var _ReactUrls2 = _interopRequireDefault(_ReactUrls);

var _Scripts = require('./routes/Scripts.js');

var _Scripts2 = _interopRequireDefault(_Scripts);

var _NewAnswer = require('./routes/NewAnswer.js');

var _NewAnswer2 = _interopRequireDefault(_NewAnswer);

var _GetAllAnswers = require('./routes/GetAllAnswers.js');

var _GetAllAnswers2 = _interopRequireDefault(_GetAllAnswers);

var _Login = require('./routes/Login.js');

var _Login2 = _interopRequireDefault(_Login);

var _UserDetails = require('./routes/UserDetails.js');

var _UserDetails2 = _interopRequireDefault(_UserDetails);

var _ChangeScore = require('./routes/ChangeScore.js');

var _ChangeScore2 = _interopRequireDefault(_ChangeScore);

var _twitterAuthStrategies = require('./authStrategies/twitterAuthStrategies.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('env2')('./config.env');

var server = new _hapi2.default.Server();
var port = process.env.PORT || 4000;

// helper methods


// server plugins


// server routes


// auth strategies


var ConnectionSettings = { port: port, routes: { cors: true } };
var Plugins = [_inert2.default, _bell2.default, _hapiAuthCookie2.default];
var Routes = [_Login2.default, _UserDetails2.default, _NewAnswer2.default, _GetAllAnswers2.default, _Images2.default, _ReactUrls2.default, _Scripts2.default, _ChangeScore2.default];

server.connection(ConnectionSettings);
server.register(Plugins, _serverHelpers.handlePlugins);
server.auth.strategy('twitter', 'bell', _twitterAuthStrategies.TwitterOauth);
server.auth.strategy('session', 'cookie', _twitterAuthStrategies.TwitterCookie);
server.route(Routes);
server.start(_serverHelpers.handleStart);

exports.default = server;