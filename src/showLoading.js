export default ({load, start, threshhold = 100}) => {
  let asyncDone = false

  setTimeout(() => asyncDone || start(), threshhold)

  return load().then(
    result => {
      asyncDone = true

      return result
    },
    err => {
      asyncDone = true

      throw err
    }
  )
}
