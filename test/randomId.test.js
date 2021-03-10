import {assert} from 'chai'
import randomId from 'rhyme/randomId'

describe('randomId', () => {
  it('generates a random string', () => {
    assert.deepEqual(randomId().length, 16)
    assert.notEqual(randomId(), randomId())
  })
})
