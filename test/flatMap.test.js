import {assert} from 'chai'
import flatMap from 'rhyme/flatMap'

describe('flatMap', () => {
  it('maps then flattens', () => {
    assert.deepEqual(flatMap(x => [x, x + 1], [1, 2]), [1, 2, 2, 3])
  })
})
