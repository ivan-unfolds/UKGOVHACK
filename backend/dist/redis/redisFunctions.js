'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.increaseScore = exports.getAllAnswers = exports.addNewAnswer = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _client = require('./client.js');

var _client2 = _interopRequireDefault(_client);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_client2.default.LPUSH = _bluebird2.default.promisify(_client2.default.LPUSH);
_client2.default.LRANGE = _bluebird2.default.promisify(_client2.default.LRANGE);

var addNewAnswer = exports.addNewAnswer = function addNewAnswer(answerObj) {
  answerObj.id = Date.now();
  answerObj.score = 0;
  answerObj.comments = [];
  answerObj.tags = _typeof(answerObj.tags) === 'object' ? answerObj.tags : [answerObj.tags];
  Object.keys(answerObj).forEach(function (prop) {
    var value = _typeof(answerObj[prop]) === 'object' ? JSON.stringify(answerObj[prop]) : answerObj[prop];
    _client2.default.HSET(answerObj.id, prop, value);
  });
};

var getAllAnswers = exports.getAllAnswers = function getAllAnswers(cb) {
  _client2.default.keys('*', function (err, reply) {
    if (err) console.log(err);else {
      (function () {
        var emptyArr = [];
        reply.map(function (hash) {
          _client2.default.hgetall(hash, function (err, hashObj) {
            if (err) console.log(err);else {
              emptyArr.push(hashObj);
              if (emptyArr.length === reply.length) cb(emptyArr);
            }
          });
        });
      })();
    }
  });
};

var increaseScore = exports.increaseScore = function increaseScore(hash) {
  _client2.default.hgetall(hash, function (err, hashObj) {
    if (err) console.log(err);else {
      (function () {
        console.log(hash, '<<<HASH');
        var newScore = +hashObj.score + 1;
        _client2.default.HSET(hash, 'score', newScore, function (err, reply) {
          if (err) console.log(err);else console.log('Increased score to ' + newScore);
        });
      })();
    }
  });
};