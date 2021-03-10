import {assert} from 'chai'
import pluralize from 'rhyme/pluralize'

describe('pluralize', () => {
  it('handles singular, zero, and plural', () => {
    assert.deepEqual(pluralize(0, 'thing'), 'things')
    assert.deepEqual(pluralize(1, 'thing'), 'thing')
    assert.deepEqual(pluralize(2, 'thing'), 'things')
  })

  it('accepts custom plural', () => {
    assert.deepEqual(pluralize(2, 'thing', 'bananas'), 'bananas')
  })
})
