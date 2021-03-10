import {assert} from 'chai'
import camelCase from 'rhyme/camelCase'

describe('camelCase', () => {
  it('handles snake case', () => {
    assert.deepEqual(camelCase('hey_there_27_babies'), 'heyThere27Babies')
  })

  it('handles kebab case', () => {
    assert.deepEqual(camelCase('hey-there-27-babies'), 'heyThere27Babies')
  })

  it('handles pascal case', () => {
    assert.deepEqual(camelCase('HeyThere27Babies'), 'heyThere27Babies')
  })

  it('handles title case', () => {
    assert.deepEqual(camelCase('Hey There 27 Babies'), 'heyThere27Babies')
  })
})
