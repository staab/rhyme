import {assert} from 'chai'
import concatAll from 'rhyme/concatAll'

describe('concatAll', () => {
  it('catches em all', () => {
    assert.deepEqual(concatAll([[1, 2], [3, 4], [5, 6, 7]]), [1, 2, 3, 4, 5, 6, 7])
  })
})
