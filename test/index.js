/*global describe:false, it:false*/
var assert = require('assert')
var dollarsToCents = require('../index')

describe('dollars-to-cents', function () {
  it('should properly error on invalid values', function () {
    assert.throws(dollarsToCents, Error)
  })

  it('should properly handle numerical values', function () {
    assert(dollarsToCents(1) === 100)
  })

  it('should properly handle decimal values', function () {
    assert(dollarsToCents(1.01) === 101)
    assert(dollarsToCents(285235000.01) === 28523500001)
  })

  it('should properly handle string values', function () {
    assert(dollarsToCents('1.01') === 101)
    assert(dollarsToCents('285235000.01') === 28523500001)
  })

  it('should properly handle string values with symbols', function () {
    assert(dollarsToCents('$1,000.01') === 100001)
    assert(dollarsToCents('$1,030.25') === 103025)
    assert(dollarsToCents('$285,235,000.01') === 28523500001)
  })
})
