import {assert} from 'chai'
import haltPromiseChain from 'rhyme/haltPromiseChain'

describe('haltPromiseChain', () => {
  it('does not run subsequent promises', done => {
    const p = haltPromiseChain(new Promise(resolve => resolve(1)))

    let result = false
    p.then(() => {
      result = true
    })

    setTimeout(() => {
      assert.equal(result, false)

      done()
    }, 50)
  })
})
