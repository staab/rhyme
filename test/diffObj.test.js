import {assert} from 'chai'
import diffObj from 'rhyme/diffObj'

describe('diffObj', () => {
  it('diffs stuff well', () => {
    assert.deepEqual(diffObj({x: 1, z: 2, a: []}, {y: 2, z: 3, a: []}), [
      '"a" was changed by identity, but not value',
      '"x" was removed: 1',
      '"y" is new: 2',
      '"z" was changed: 2 -> 3',
    ])
  })
})
