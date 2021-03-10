import {assert} from 'chai'
import closure from 'rhyme/closure'

describe('closure', () => {
  it('does what it does', () => {
    assert.equal(closure(() => 1), 1)
  })
})
