import {assert} from 'chai'
import ffirst from 'rhyme/ffirst'

describe('ffirst', () => {
  it('gets the ffirst element', () => {
    assert.deepEqual(ffirst([[1, 2]]), 1)
  })
})
