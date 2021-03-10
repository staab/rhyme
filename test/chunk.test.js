import {assert} from 'chai'
import chunk from 'rhyme/chunk'

describe('chunk', () => {
  it('chunks uneven stuff good', () => {
    assert.deepEqual(chunk(3, [1, 2, 3, 4, 5]), [[1, 2, 3], [4, 5]])
  })
})
