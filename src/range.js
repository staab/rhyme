export default (low, high, step = 1) => {
  const r = []

  for (let i = low; i < high; i += step) {
    r.push(i)
  }

  return r
}
