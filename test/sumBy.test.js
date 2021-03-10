import {assert} from 'chai'
import sumBy from 'rhyme/sumBy'

describe('sumBy', () => {
  it('sums by the given function', () => {
    assert.deepEqual(sumBy(x => x + 1, [1, 2, 3]), 9)
  })
})
