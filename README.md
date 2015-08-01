# jstransformer-underscore

[Underscore Template](http://underscorejs.org/#template) support for [JSTransformers](http://github.com/jstransformers/jstransformer).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-underscore/master.svg)](https://travis-ci.org/jstransformers/jstransformer-underscore)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-underscore/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-underscore?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-underscore/master.svg)](http://david-dm.org/jstransformers/jstransformer-underscore)
[![NPM version](https://img.shields.io/npm/v/jstransformer-underscore.svg)](https://www.npmjs.org/package/jstransformer-underscore)

## Installation

    npm install jstransformer-underscore

## API

```js
var underscore = require('jstransformer')(require('jstransformer-underscore'))

underscore.render('Hello <%= name %>', { name: "World" }).body
//=> 'Hello World'
```

## License

MIT
