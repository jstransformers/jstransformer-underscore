'use strict';

var assert = require('assert');
var transformer = require('../');

var result = transformer.compile("Using 'with': <%= data.answer %>", {variable: 'data'})({answer: 'no'});

assert(result === "Using 'with': no");

var client = transformer.compileClient("Using 'with': <%= data.answer %>", {variable: 'data'});
assert(Function('', 'return ' + client)()({answer: 'no'}) === "Using 'with': no");

console.log('tests passed');
