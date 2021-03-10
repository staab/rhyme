import {assert} from 'chai'
import switcherFn from 'rhyme/switcherFn'

describe('switcherFn', () => {
  it('dispatches to the matching key', () => {
    assert.deepEqual(switcherFn('x', {x: () => 1}), 1)
  })

  it('dispatches to default if not matching key', () => {
    assert.deepEqual(switcherFn('x', {y: () => 1, default: () => 2}), 2)
  })
})
