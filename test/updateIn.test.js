import {assert} from 'chai'
import updateIn from 'rhyme/updateIn'

describe('updateIn', () => {
  it('updates given key with f', () => {
    assert.deepEqual(updateIn('x', x => x + 1, {x: 1}), {x: 2})
  })
})
