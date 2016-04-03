'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redisFunctions = require('../redis/redisFunctions.js');

exports.default = {
  path: '/getAllAnswers',
  method: 'GET',
  handler: function handler(request, reply) {
    (0, _redisFunctions.getAllAnswers)(function (allTheAnswers) {
      reply(JSON.stringify(allTheAnswers));
    });
  }
};