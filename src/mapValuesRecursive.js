import curry from 'ramda/src/curry'

const mapValuesRecursive = curry((m, f, x) => {
  if (m(x)) {
    return f(x)
  }

  if (x instanceof Array) {
    return x.map(mapValuesRecursive(m, f))
  }

  // Only recur into pojos
  if (!x || x.constructor !== Object) {
    return x
  }

  const r = {}
  for (const k in x) {
    r[k] = mapValuesRecursive(m, f, x[k])
  }

  return r
})

export default mapValuesRecursive
