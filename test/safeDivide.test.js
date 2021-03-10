import {assert} from 'chai'
import safeDivide from 'rhyme/safeDivide'

describe('safeDivide', () => {
  it('divides regular and by zero', () => {
    assert.deepEqual(safeDivide(10, 2), 5)
    assert.deepEqual(safeDivide(10, 0), 0)
  })
})
