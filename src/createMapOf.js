import curry from 'ramda/src/curry'

export default curry((kk, vk, xs) => {
  const r = {}
  xs.forEach(x => {
    r[x[kk]] = x[vk]
  })

  return r
})
