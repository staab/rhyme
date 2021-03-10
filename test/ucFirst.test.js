import {assert} from 'chai'
import ucFirst from 'rhyme/ucFirst'

describe('ucFirst', () => {
  it('uppercases the first letter of the string', () => {
    assert.equal(ucFirst(''), '')
    assert.equal(ucFirst('hey there'), 'Hey there')
  })
})
