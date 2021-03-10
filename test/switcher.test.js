import {assert} from 'chai'
import switcher from 'rhyme/switcher'

describe('switcher', () => {
  it('dispatches to the matching key', () => {
    assert.deepEqual(switcher('x', {x: 1}), 1)
  })

  it('dispatches to default if not matching key', () => {
    assert.deepEqual(switcher('x', {y: 1, default: 2}), 2)
  })
})
