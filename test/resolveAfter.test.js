import {assert} from 'chai'
import resolveAfter from 'rhyme/resolveAfter'

describe('resolveAfter', () => {
  it('resolves after the timeout', done => {
    resolveAfter(10, 1).then(x => {
      assert.equal(x, 1)

      done()
    })
  })
})
