import curry from 'ramda/src/curry'

export default curry((f, xs) => {
  let r = 0
  xs.forEach(x => {
    r += f(x)
  })

  return r
})
