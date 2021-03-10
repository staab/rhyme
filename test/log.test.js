import {assert} from 'chai'
import log from 'rhyme/log'

describe('log', () => {
  it('calculates a logarithm with different bases', () => {
    assert.equal(log(10, 3), 0.47712125471966244)
    assert.equal(log(8, 3), 0.5283208335737188)
  })
})
