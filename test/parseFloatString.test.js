import {assert} from 'chai'
import parseFloatString from 'rhyme/parseFloatString'

describe('parseFloatString', () => {
  it('parses all kinds of weird stuff', () => {
    assert.equal(parseFloatString(3.4), 3.4)
    assert.equal(parseFloatString(NaN), 0)
    assert.equal(parseFloatString('1.01'), 1.01)
    assert.equal(parseFloatString('29'), 29)
    assert.equal(parseFloatString('3.'), 3)
    assert.equal(parseFloatString('nope'), 0)
  })
})
