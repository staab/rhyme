import {assert} from 'chai'
import diffSet from 'rhyme/diffSet'

describe('diffSet', () => {
  it('shows all three types of diff', () => {
    assert.deepEqual(diffSet([1, 2], [2, 3]), {
      added: [3],
      removed: [1],
      mutual: [2],
    })
  })
})
