import curry from 'ramda/src/curry'

export default curry((kk, xs) => {
  const r = {}
  xs.forEach(x => {
    r[x[kk]] = x
  })

  return r
})
