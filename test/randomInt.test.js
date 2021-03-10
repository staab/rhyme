import {assert} from 'chai'
import randomInt from 'rhyme/randomInt'

describe('randomInt', () => {
  it('accepts min and max params', () => {
    assert.deepEqual(randomInt(10, 10), 10)
    assert.isAbove(randomInt(10, 11), 9)
    assert.isBelow(randomInt(10, 11), 12)
  })
})
