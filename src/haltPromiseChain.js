import noopPromise from 'rhyme/noopPromise'

export default promise => {
  promise.catch(() => null)

  return noopPromise
}
