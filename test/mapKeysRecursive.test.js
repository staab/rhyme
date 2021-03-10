import {assert} from 'chai'
import mapKeysRecursive from 'rhyme/mapKeysRecursive'

describe('mapKeysRecursive', () => {
  it('recursively updates all object keys', () => {
    assert.deepEqual(
      mapKeysRecursive(k => `_${k}`, [[{x: 1}], {y: {z: 2}}, 3]),
      [[{_x: 1}], {_y: {_z: 2}}, 3]
    )
  })
})
