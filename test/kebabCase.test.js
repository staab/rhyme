import {assert} from 'chai'
import kebabCase from 'rhyme/kebabCase'

describe('kebabCase', () => {
  it('handles snake case', () => {
    assert.deepEqual(kebabCase('hey_there_27_babies'), 'hey-there-27-babies')
  })

  it('handles kebab case', () => {
    assert.deepEqual(kebabCase('hey-there-27-babies'), 'hey-there-27-babies')
  })

  it('handles pascal case', () => {
    assert.deepEqual(kebabCase('HeyThere27Babies'), 'hey-there-27-babies')
  })

  it('handles title case', () => {
    assert.deepEqual(kebabCase('Hey There 27 Babies'), 'hey-there-27-babies')
  })
})
