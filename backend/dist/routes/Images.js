'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  path: '/img/{imageUrl*}',
  method: 'GET',
  handler: {
    directory: { path: './public/img' }
  }
};