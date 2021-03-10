import curry from 'ramda/src/curry'

export default curry((a, b, o) => {
  const r = {[b]: o[a]}

  for (const k in o) {
    if (k !== a) {
      r[k] = o[k]
    }
  }

  return r
})
