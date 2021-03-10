import {assert} from 'chai'
import enforce from 'rhyme/enforce'

describe('enforce', () => {
  it('only throws if condition is false', () => {
    assert.doesNotThrow(() => enforce(true, 'hi'))
    assert.throws(() => enforce(false, 'hi'))
  })
})
