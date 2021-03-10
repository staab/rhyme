import {assert} from 'chai'
import poll from 'rhyme/poll'

describe('poll', () => {
  it('polls until condition is met', done => {
    let condition = false
    let pollTimes = 0

    poll(() => {
      pollTimes++

      return condition
    }, 12)

    setTimeout(() => {
      condition = true
    }, 35)

    setTimeout(() => {
      assert.equal(pollTimes, 4)

      done()
    }, 100)
  })
})
