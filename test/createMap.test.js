import {assert} from 'chai'
import createMap from 'rhyme/createMap'

describe('createMap', () => {
  it('creates a map!', () => {
    assert.deepEqual(createMap('x', [{x: 'a'}, {x: 'b'}]), {a: {x: 'a'}, b: {x: 'b'}})
  })
})
