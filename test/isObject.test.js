import {assert} from 'chai'
import isObject from 'rhyme/isObject'

describe('isObject', () => {
  it('only matches objects, not arrays', () => {
    assert.equal(isObject({}), true)
    assert.equal(isObject([]), false)
  })
})
