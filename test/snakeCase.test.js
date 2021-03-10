import {assert} from 'chai'
import snakeCase from 'rhyme/snakeCase'

describe('snakeCase', () => {
  it('handles camel case', () => {
    assert.deepEqual(snakeCase('heyThere27Babies'), 'hey_there_27_babies')
  })

  it('handles kebab case', () => {
    assert.deepEqual(snakeCase('hey-there-27-babies'), 'hey_there_27_babies')
  })

  it('handles pascal case', () => {
    assert.deepEqual(snakeCase('HeyThere27Babies'), 'hey_there_27_babies')
  })

  it('handles title case', () => {
    assert.deepEqual(snakeCase('Hey There 27 Babies'), 'hey_there_27_babies')
  })
})
