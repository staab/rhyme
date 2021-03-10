import {assert} from 'chai'
import fillArray from 'rhyme/fillArray'

describe('fillArray', () => {
  it('fills an array', () => {
    assert.deepEqual(fillArray(3, 'x'), ['x', 'x', 'x'])
  })
})
