import {assert} from 'chai'
import mergeIn from 'rhyme/mergeIn'

describe('mergeIn', () => {
  it('merges one level deep', () => {
    assert.deepEqual(mergeIn('x', {y: 1}, {x: {z: 2}}), {x: {y: 1, z: 2}})
  })
})
