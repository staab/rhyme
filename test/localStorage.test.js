import {assert} from 'chai'
import ls from 'rhyme/localStorage'

describe('localStorage', () => {
  it('gets and sets strings', () => {
    ls.setItem('x', 'hello')

    assert.equal(ls.getItem('x'), 'hello')
  })

  it('gets and sets json', () => {
    ls.setJson('x', 3)
    ls.setJson('y', {x: 1})

    assert.equal(ls.getJson('x'), 3)
    assert.deepEqual(ls.getJson('y'), {x: 1})
  })

  it('clears stuff', () => {
    ls.setItem('x', 'hello')

    ls.clear()

    assert.equal(ls.getItem('x'), undefined)
  })

  it('cursors work', () => {
    const cursor = ls.cursor('c', 'hello')

    assert.equal(cursor.get(), 'hello')

    cursor.set('goodbye')

    assert.equal(cursor.get(), 'goodbye')
  })
})
