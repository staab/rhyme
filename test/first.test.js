import {assert} from 'chai'
import first from 'rhyme/first'

describe('first', () => {
  it('gets the first element', () => {
    assert.deepEqual(first([1]), 1)
  })
})
