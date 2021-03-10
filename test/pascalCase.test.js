import {assert} from 'chai'
import pascalCase from 'rhyme/pascalCase'

describe('pascalCase', () => {
  it('handles snake case', () => {
    assert.deepEqual(pascalCase('hey_there_27_babies'), 'HeyThere27Babies')
  })

  it('handles kebab case', () => {
    assert.deepEqual(pascalCase('hey-there-27-babies'), 'HeyThere27Babies')
  })

  it('handles pascal case', () => {
    assert.deepEqual(pascalCase('HeyThere27Babies'), 'HeyThere27Babies')
  })

  it('handles title case', () => {
    assert.deepEqual(pascalCase('Hey There 27 Babies'), 'HeyThere27Babies')
  })
})
