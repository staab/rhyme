import {assert} from 'chai'
import sleep from 'rhyme/sleep'
import showLoading from 'rhyme/showLoading'

describe('showLoading', () => {
  it('avoids flashes of loading if loading turns out to take no time', done => {
    let loadingShown = false

    const load = () => sleep(20)

    const start = () => {
      loadingShown = true
    }

    showLoading({load, start}).then(() => {
      assert.equal(loadingShown, false)

      return showLoading({load, start, threshhold: 10})
    }).then(() => {
      assert.equal(loadingShown, true)

      done()
    })
  })
})
