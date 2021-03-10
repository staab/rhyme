import {assert} from 'chai'
import quantify from 'rhyme/quantify'

describe('quantify', () => {
  it('handles singular, zero, and plural', () => {
    assert.deepEqual(quantify(0, 'thing'), '0 things')
    assert.deepEqual(quantify(1, 'thing'), '1 thing')
    assert.deepEqual(quantify(2, 'thing'), '2 things')
  })

  it('accepts custom plural', () => {
    assert.deepEqual(quantify(2, 'thing', 'bananas'), '2 bananas')
  })
})
