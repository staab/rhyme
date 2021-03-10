import {assert} from 'chai'
import initArray from 'rhyme/initArray'

describe('initArray', () => {
  it('sets up an array with the given function', () => {
    assert.deepEqual(initArray(2, () => 1), [1, 1])
  })
})
