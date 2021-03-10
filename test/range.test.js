import {assert} from 'chai'
import range from 'rhyme/range'

describe('range', () => {
  it('generates a range of numbers', () => {
    assert.deepEqual(range(3, 6), [3, 4, 5])
    assert.deepEqual(range(3, 6, 2), [3, 5])
  })
})
