'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
require('env2')('config.env');
var CONSUMER_KEY = process.env.CONSUMER_KEY;
var CONSUMER_SECRET = process.env.CONSUMER_SECRET;

var TwitterCookie = exports.TwitterCookie = {
  password: 'password1ajskdhasjkdhasjkdhasjkhdjsakdhajksdhasjkdh',
  cookie: 'twitterCookie',
  redirectTo: '/login-with-twitter',
  isSecure: false
};

var TwitterOauth = exports.TwitterOauth = {
  provider: 'twitter',
  password: 'password2akjsdsakjdhajksdhajksdhajskdhasjkdhsajkdhasjkdh',
  clientId: CONSUMER_KEY,
  clientSecret: CONSUMER_SECRET,
  isSecure: false
};