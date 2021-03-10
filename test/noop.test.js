import {assert} from 'chai'
import noop from 'rhyme/noop'

describe('noop', () => {
  it('does nothing', () => {
    assert.equal(noop(), undefined)
  })
})
