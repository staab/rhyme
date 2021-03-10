import {assert} from 'chai'
import doPipe from 'rhyme/doPipe'

describe('doPipe', () => {
  it('pipes stuff', () => {
    assert.deepEqual(doPipe(1, [x => x + 2, x => x * 5, x => x - 1]), 14)
  })
})
