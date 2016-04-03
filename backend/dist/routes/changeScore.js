'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redisFunctions = require('../redis/redisFunctions.js');

exports.default = {
  path: '/changeScore/{id}',
  method: 'GET',
  handler: function handler(request, reply) {
    console.log('REQUEST PARAMS: ', request.params);
    (0, _redisFunctions.increaseScore)(request.params.id);
    reply('success');
  }
};