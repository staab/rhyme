import {assert} from 'chai'
import parseIntegerString from 'rhyme/parseIntegerString'

describe('parseIntegerString', () => {
  it('parses all kinds of weird stuff', () => {
    assert.equal(parseIntegerString(3.7), 3)
    assert.equal(parseIntegerString(NaN), 0)
    assert.equal(parseIntegerString('1.01'), 1)
    assert.equal(parseIntegerString('29'), 29)
    assert.equal(parseIntegerString('3.'), 3)
    assert.equal(parseIntegerString('nope'), 0)
  })
})
