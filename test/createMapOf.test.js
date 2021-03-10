import {assert} from 'chai'
import createMapOf from 'rhyme/createMapOf'

describe('createMapOf', () => {
  it('creates a map of x to y', () => {
    const a = [{x: 'a', y: 1}, {x: 'b', y: 2}]

    assert.deepEqual(createMapOf('x', 'y', a), {a: 1, b: 2})
  })
})
