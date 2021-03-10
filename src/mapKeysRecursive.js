import curry from 'ramda/src/curry'

const mapKeysRecursive = curry((f, x) => {
  if (x instanceof Array) {
    return x.map(mapKeysRecursive(f))
  }

  // Only recur into pojos
  if (!x || x.constructor !== Object) {
    return x
  }

  const r = {}
  for (const k in x) {
    r[f(k)] = mapKeysRecursive(f, x[k])
  }

  return r
})

export default mapKeysRecursive
