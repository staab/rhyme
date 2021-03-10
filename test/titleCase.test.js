import {assert} from 'chai'
import titleCase from 'rhyme/titleCase'

describe('titleCase', () => {
  it('handles snake case', () => {
    assert.deepEqual(titleCase('hey_there_27_babies'), 'Hey There 27 Babies')
  })

  it('handles kebab case', () => {
    assert.deepEqual(titleCase('hey-there-27-babies'), 'Hey There 27 Babies')
  })

  it('handles pascal case', () => {
    assert.deepEqual(titleCase('HeyThere27Babies'), 'Hey There 27 Babies')
  })

  it('handles title case', () => {
    assert.deepEqual(titleCase('Hey There 27 Babies'), 'Hey There 27 Babies')
  })
})
