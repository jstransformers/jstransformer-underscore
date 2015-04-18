
'use strict';

var assert = require('assert');
var fs = require('fs');
var join = require('path').join;
var test = require('testit');

var transform = require('../');

var input = "Using 'with': <%= data.answer %>";
var options = { variable: 'data' };
var locals = { answer: 'no' };
var expected = "Using 'with': no";

function assertEqual(output, expected) {
  console.log('   Output:\t'   + JSON.stringify(output));
  console.log('   Expected:\t' + JSON.stringify(expected));
  assert.equal(output, expected);
}

test(transform.name + '.compile()', function () {
  var output = transform.compile(input, options)(locals);
  assertEqual(output, expected);
});

test(transform.name + '.compileClient()', function () {
  var client = transform.compileClient(input, options);
  assertEqual(Function('', 'return ' + client)()(locals), expected)
});
