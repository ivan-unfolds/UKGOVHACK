'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  path: '/{param*}',
  method: 'GET',
  handler: function handler(response, reply) {
    reply.file('./public/' + 'index.html');
  }
};