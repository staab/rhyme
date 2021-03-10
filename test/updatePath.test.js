import {assert} from 'chai'
import always from 'ramda/src/always'
import updatePath from 'rhyme/updatePath'

describe('updatePath', () => {
  const obj = {x: {y: {z: 1}}, y: {z: 2}, z: 3}

  it('should provide value, parent, and root as context', () => {
    updatePath(['x', 'y', 'z'], x => assert.equal(x, 1), obj)
  })

  it('should set returned value to the object at a given path of any length', () => {
    assert.equal(updatePath([], always(2), obj), 2)
    assert.deepEqual(updatePath(['x'], always(2), obj), {x: 2, y: {z: 2}, z: 3})
    assert.deepEqual(updatePath(['x', 'y'], always(2), obj), {x: {y: 2}, y: {z: 2}, z: 3})
    assert.deepEqual(
      updatePath(['x', 'y', 'z'], always(2), obj),
      {x: {y: {z: 2}}, y: {z: 2}, z: 3}
    )
  })
})
