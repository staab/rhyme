import {assert} from 'chai'
import delimit from 'rhyme/delimit'

describe('delimit', () => {
  it('handles various cardinalities', () => {
    assert.deepEqual(delimit([]), '')
    assert.deepEqual(delimit([1]), 1)
    assert.deepEqual(delimit([1, 2]), '1 and 2')
    assert.deepEqual(delimit([1, 2, 3, 4]), '1, 2, 3, and 4')
    assert.deepEqual(delimit([1, 2, 3, 4, 5, 6, 7, 8, 9]), '1, 2, 3, 4, 5, 6, and 3 others')
  })
})
