import {assert} from 'chai'
import renameProp from 'rhyme/renameProp'

describe('renameProp', () => {
  it('copies the property and removes the old one', () => {
    assert.deepEqual(renameProp('a', 'b', {a: 1, c: 2}), {b: 1, c: 2})
  })
})
