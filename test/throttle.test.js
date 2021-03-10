import {assert} from 'chai'
import throttle from 'rhyme/throttle'

describe('throttle', () => {
  it('defers calls until timeout', done => {
    let n = 0

    const f = throttle(() => n++, 10)

    for (let i = 0; i < 4; i++) {
      f()
    }

    assert.equal(n, 1)

    setTimeout(() => {
      for (let i = 0; i < 4; i++) {
        f()
      }

      assert.equal(n, 2)

      done()
    }, 10)
  })
})
