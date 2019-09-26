'use strict'

const _ = require('underscore')

exports.name = 'underscore'
exports.outputFormat = 'html'

exports.compile = function (source, options) {
  return _.template(source, options)
}

exports.compileClient = function (source, options) {
  return _.template(source, options).source
}
