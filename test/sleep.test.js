import {assert} from 'chai'
import sleep from 'rhyme/sleep'

describe('sleep', () => {
  it('resolves after timeout', done => {
    let resolved = false

    sleep(10).then(() => {
      resolved = true
    })

    setTimeout(() => {
      assert.equal(resolved, false)
    }, 5)

    setTimeout(() => {
      assert.equal(resolved, true)

      done()
    }, 15)
  })
})
