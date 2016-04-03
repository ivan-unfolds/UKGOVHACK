'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redis = require('redis');

var _redis2 = _interopRequireDefault(_redis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DB_URL = process.env.REDIS_URL || 'redis://localhost:6379';
var DB_NUM = process.env.REDIS_DB || 0;
var client = _redis2.default.createClient(DB_URL);

client.select(DB_NUM, function () {
  console.log('Connected to Redis database num ', DB_NUM, ' on ', DB_URL);
});

exports.default = client;