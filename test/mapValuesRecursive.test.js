import {assert} from 'chai'
import mapValuesRecursive from 'rhyme/mapValuesRecursive'

describe('mapValuesRecursive', () => {
  it('recursively updates all matching values', () => {
    assert.deepEqual(
      mapValuesRecursive(
        v => typeof v === 'number',
        v => v + 1,
        [[{x: 1}], {y: {z: 2}}, 3]
      ),
      [[{x: 2}], {y: {z: 3}}, 4]
    )

    assert.deepEqual(
      mapValuesRecursive(
        v => v.z,
        () => null,
        [[{x: 1}], {y: {z: 2}}, 3]
      ),
      [[{x: 1}], {y: null}, 3]
    )
  })
})
