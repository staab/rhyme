import {assert} from 'chai'
import splice from 'rhyme/splice'

describe('splice', () => {
  it('splices stuff', () => {
    assert.deepEqual(splice(2, 2, 'hello'), 'heo')
  })
})
