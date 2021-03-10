import {assert} from 'chai'
import invert from 'rhyme/invert'

describe('invert', () => {
  it('inverts a nested array', () => {
    assert.deepEqual(invert([[1, 2], [3, 4]]), [[1, 3], [2, 4]])
  })
})
