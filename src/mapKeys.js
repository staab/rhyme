import curry from 'ramda/src/curry'

export default curry((f, o) => {
  const r = {}

  for (const k in o) {
    r[f(k)] = o[k]
  }

  return r
})
