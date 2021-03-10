import curry from 'ramda/src/curry'
import clone from 'ramda/src/clone'

export default curry((ks, v) => {
  const r = {}

  ks.forEach(k => {
    r[k] = clone(v)
  })

  return r
})
