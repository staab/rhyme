export default (f, timeout) => {
  let lastCall = 0

  return (...args) => {
    const now = new Date().valueOf()

    if (now - timeout > lastCall) {
      lastCall = now

      f(...args)
    }
  }
}
