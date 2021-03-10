import {assert} from 'chai'
import ensurePlural from 'rhyme/ensurePlural'

describe('ensurePlural', () => {
  it('only wraps if something is not an array', () => {
    assert.deepEqual(ensurePlural([1, 2]), [1, 2])
    assert.deepEqual(ensurePlural({x: 1}), [{x: 1}])
  })
})
