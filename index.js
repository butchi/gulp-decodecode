'use strict';
var uglify = require('decodecode');
var minifier = require('./minifier');

module.exports = function (opts) {
  return minifier(opts, uglify);
};
