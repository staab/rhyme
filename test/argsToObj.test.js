import {assert} from 'chai'
import argsToObj from 'rhyme/argsToObj'

describe('argsToObj', () => {
  it('ignores extra arguments', () => {
    assert.deepEqual(argsToObj(['x', 'y'])(1, 2, 3), {x: 1, y: 2})
  })
})
