import {assert} from 'chai'
import fillKeys from 'rhyme/fillKeys'

describe('fillKeys', () => {
  it('creates an object with the specified keys and value', () => {
    assert.deepEqual(fillKeys(['a', 'b'], 1), {a: 1, b: 1})
  })
})
