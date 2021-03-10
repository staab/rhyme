import {assert} from 'chai'
import p from 'rhyme/p'

describe('p', () => {
  it('returns the second argument', () => {
    assert.deepEqual(p('hello', 1), 1)
  })
})
