'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleStart = exports.handlePlugins = undefined;

var _server = require('../server.js');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlePlugins = exports.handlePlugins = function handlePlugins(err) {
  if (err) {
    console.log('plugins error: ', err);
    throw err;
  }
};

var handleStart = exports.handleStart = function handleStart(err) {
  if (err) {
    console.log('server error: ', err);
  } else {
    console.log('server listening on port: ' + _server2.default.info.port);
  }
};