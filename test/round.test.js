import {assert} from 'chai'
import round from 'rhyme/round'

describe('round', () => {
  it('rounds to precision', () => {
    assert.deepEqual(round(0, 9871.264), 9871)
    assert.deepEqual(round(-3, 9871.264), 9871.264000000001)
    assert.deepEqual(round(2, 9871.264), 9900)
  })
})
