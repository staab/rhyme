import {assert} from 'chai'
import mergeRight from 'rhyme/mergeRight'

describe('mergeRight', () => {
  it('merges opposite usual', () => {
    assert.deepEqual(mergeRight({x: 1}, {x: 2}), {x: 1})
  })
})
