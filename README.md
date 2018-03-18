[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]
[![dependencies](https://david-dm.org/greenpioneersolutions/parallel-loop/dev-status.svg)](https://david-dm.org/greenpioneersolutions/parallel-loop)
[![npm-issues](https://img.shields.io/github/issues/greenpioneersolutions/parallel-loop.svg)](https://github.com/greenpioneersolutions/parallel-loop/issues)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Build Status](https://travis-ci.org/greenpioneersolutions/parallel-loop.svg?branch=master)](https://travis-ci.org/greenpioneersolutions/parallel-loop)
[![js-standard-style](https://nodei.co/npm/parallel-loop.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/parallel-loop.png?downloads=true&downloadRank=true&stars=true)

[npm-image]: https://img.shields.io/npm/v/parallel-loop.svg?style=flat
[npm-url]: https://npmjs.org/package/parallel-loop
[downloads-image]: https://img.shields.io/npm/dt/parallel-loop.svg?style=flat
[downloads-url]: https://npmjs.org/package/parallel-loop
# parallel-loop

Async parallel loop. 

## Install

```bash
#NPM
npm install parallel-loop --save
#YARN
yarn add parallel-loop
```

## Usage

```js
const loop = require('parallel-loop')

loop(10, each, function () {
  console.log('end')
})

function each (done, i) {
  setTimeout(function () {
    console.log(i)
    done()
  }, Math.floor(Math.random() * 500))
})
```

Will output:

```
3
9
2
5
7
4
1
8
6
end
```
