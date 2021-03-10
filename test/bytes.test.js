import {assert} from 'chai'
import bytes from 'rhyme/bytes'

describe('bytes', () => {
  it('handles kb', () => {
    assert.deepEqual(2048, bytes(2, 'kb'))
  })

  it('handles mb', () => {
    assert.deepEqual(2097152, bytes(2, 'mb'))
  })

  it('handles gb', () => {
    assert.deepEqual(2147483648, bytes(2, 'gb'))
  })

  it('throws on failure', () => {
    assert.throws(() => bytes(2, 'tb'))
  })
})
