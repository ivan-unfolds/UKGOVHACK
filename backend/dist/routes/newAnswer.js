'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redisFunctions = require('../redis/redisFunctions.js');

exports.default = {
  path: '/newAnswer',
  method: 'POST',
  handler: function handler(request, reply) {
    (0, _redisFunctions.addNewAnswer)(request.payload);
    reply.redirect('/');
  }
};