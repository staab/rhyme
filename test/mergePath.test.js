import {assert} from 'chai'
import mergePath from 'rhyme/mergePath'

describe('mergePath', () => {
  it('merges multiple level deep', () => {
    assert.deepEqual(mergePath(['x', 'y'], {z: 1}, {x: {y: {z: 2}}}), {x: {y: {z: 1}}})
  })
})
