import curry from 'ramda/src/curry'

export default curry((l, xs) => {
  const r = []
  let c = []

  xs.forEach(item => {
    if (c.length < l) {
      c.push(item)
    }

    if (c.length === l) {
      r.push(c)
      c = []
    }
  })

  if (c.length > 0) {
    r.push(c)
  }

  return r
})
