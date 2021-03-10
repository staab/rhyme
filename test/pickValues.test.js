import {assert} from 'chai'
import pickValues from 'rhyme/pickValues'

describe('pickValues', () => {
  it('returns a list of specified values', () => {
    assert.deepEqual(pickValues(['a', 'b'], {a: 1, b: 2, c: 3}), [1, 2])
  })
})
