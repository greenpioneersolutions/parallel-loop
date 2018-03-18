var loop = require('../')
var assert = require('chai').assert
describe('parallel-loop', function () {
  it('10', function () {
    var arr = []
    loop(10, function each (done, i) {
      arr.push(i)
      done()
    }, function () {
      assert.deepEqual(arr, [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ])
    })
  })

  it('async', function () {
    var arr = []
    loop(10, function each (done, i) {
      arr.push(i)
      if (i % 2 === 0) {
        return done()
      }
      setTimeout(done, 1500)
    }, function () {
      assert.deepEqual(arr, [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ])
    })
  })

  it('ignores multiple done calls', function () {
    var last = 0
    var acc = 0
    var arr = []
    loop(10, function each (done, i) {
      acc += i
      last = i
      arr.push(i)
      done()
      done()
      done()
    }, function () {
      assert.equal(acc, 45)
      assert.equal(last, 9)
      assert.deepEqual(arr, [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ])
    })
  })

  it('zero length', function () {
    var arr = []
    loop(0, function each (done, i) {
      arr.push(i)
      throw new Error('fail')
    }, function () {
      assert.deepEqual(arr, [])
    })
  })

  it('with no callback', function () {
    var arr = []
    loop(5, function (done, i) {
      arr.push(i)
      done()
    })
    setTimeout(function () { assert.deepEqual(arr, [0, 1, 2, 3, 4]) }, 50)
  })
})
