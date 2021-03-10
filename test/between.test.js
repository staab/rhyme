import {assert} from 'chai'
import between from 'rhyme/between'

describe('between', () => {
  it('handles lower bound', () => {
    assert.deepEqual(between(0, 3, -1), false)
  })

  it('handles upper bound', () => {
    assert.deepEqual(between(0, 3, 9), false)
  })

  it('handles match', () => {
    assert.deepEqual(between(0, 3, 2), true)
  })
})
