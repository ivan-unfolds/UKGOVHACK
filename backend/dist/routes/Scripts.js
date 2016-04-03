'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  path: '/{filename}.js',
  method: 'GET',
  handler: function handler(response, reply) {
    var js = './public' + response.path;
    reply.file(js);
  }
};