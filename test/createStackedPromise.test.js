import {assert} from 'chai'
import sleep from 'rhyme/sleep'
import createStackedPromise from 'rhyme/createStackedPromise'

describe('createStackedPromise', () => {
  it('calls all intermediate functions, all promises return the final value', () => {
    const track = createStackedPromise()
    const results = []

    const p1 = track(sleep(10).then(() => results.push(1) || 3))
    const p2 = track(sleep(20).then(() => results.push(2) || 3))
    const p3 = track(sleep(30).then(() => results.push(3) || 3))

    return Promise.all([p1, p2, p3]).then(([v1, v2, v3]) => {
      assert.equal(v1, 3)
      assert.equal(v2, 3)
      assert.equal(v3, 3)

      assert.deepEqual(results, [1, 2, 3])
    })
  })
})
