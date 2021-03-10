import {assert} from 'chai'
import mapKeys from 'rhyme/mapKeys'

describe('mapKeys', () => {
  it('maps keys of an object', () => {
    assert.deepEqual(mapKeys(k => `_${k}`, {x: 1, y: 2}), {_x: 1, _y: 2})
  })
})
