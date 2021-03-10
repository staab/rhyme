import {assert} from 'chai'
import doto from 'rhyme/doto'

describe('doto', () => {
  it('does it to it', () => {
    assert.deepEqual(doto(1, x => x + 1), 2)
  })
})
