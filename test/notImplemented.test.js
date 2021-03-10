import {assert} from 'chai'
import notImplemented from 'rhyme/notImplemented'

describe('notImplemented', () => {
  it('throws an error when called', () => {
    assert.throws(notImplemented('hello'), 'hello')
  })
})
