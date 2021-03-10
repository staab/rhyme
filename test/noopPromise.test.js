import {assert} from 'chai'
import noopPromise from 'rhyme/noopPromise'

describe('noopPromise', () => {
  it('does nothing', done => {
    let something = false

    noopPromise.then(() => {
      something = true
    }).catch(() => {
      something = true
    })

    setTimeout(() => {
      assert.equal(something, false)

      done()
    }, 10)
  })
})
