import {assert} from 'chai'
import isUrl from 'rhyme/isUrl'

describe.skip('isUrl', () => {
  it('recognizes urls', () => {
    assert.deepEqual(isUrl('blah'), false)
    assert.deepEqual(isUrl('http://thing.blah'), false)
  })
})
