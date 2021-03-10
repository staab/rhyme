import {assert} from 'chai'
import count from 'rhyme/count'

describe('count', () => {
  it('counts objects accurately', () => {
    assert.deepEqual(count({}), 0)
    assert.deepEqual(count({x: 1}), 1)
    assert.deepEqual(count({x: 1, y: 2}), 2)
  })
})
