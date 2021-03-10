import {assert} from 'chai'
import tap from 'rhyme/tap'

describe('tap', () => {
  it('runs the function, returns the value', () => {
    let effect = false

    const f = () => {
      effect = true
    }

    assert.equal(tap(f)(1), 1)
    assert.equal(effect, true)
  })
})
