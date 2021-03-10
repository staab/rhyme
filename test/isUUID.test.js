import {assert} from 'chai'
import isUUID from 'rhyme/isUUID'

describe('isUUID', () => {
  it('recognizes uuids', () => {
    assert.deepEqual(isUUID('D383A312-2536-4EE6-A3CC-29042F37AF96'), true)
    assert.deepEqual(isUUID('d383a312-2536-4ee6-a3cc-29042f37af96'), true)
    assert.deepEqual(isUUID('d383a312-2536-4ee6-a3cc-29042f37af9]'), false)
  })
})
