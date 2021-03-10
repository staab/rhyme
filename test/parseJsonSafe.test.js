import {assert} from 'chai'
import parseJsonSafe from 'rhyme/parseJsonSafe'

describe('parseJsonSafe', () => {
  it('parses json, but never errors', () => {
    assert.deepEqual(parseJsonSafe('{}'), {})
    assert.deepEqual(parseJsonSafe('{bork}'), undefined)
  })
})
