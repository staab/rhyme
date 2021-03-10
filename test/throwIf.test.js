import {assert} from 'chai'
import throwIf from 'rhyme/throwIf'

describe('throwIf', () => {
  it('throws if there is an error to be thrown', () => {
    assert.doesNotThrow(() => throwIf(null))
    assert.throws(() => throwIf(new Error('hi')), 'hi')
  })
})
