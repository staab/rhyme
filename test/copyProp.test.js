import {assert} from 'chai'
import copyProp from 'rhyme/copyProp'

describe('copyProp', () => {
  it('copies the property, leaving everything else intact', () => {
    assert.deepEqual(copyProp('a', 'b', {a: 1, c: 2}), {a: 1, b: 1, c: 2})
  })
})
