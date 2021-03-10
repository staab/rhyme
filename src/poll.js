export default (f, timeout = 100) => new Promise(resolve => {
  (function tryIt() {
    const result = f()

    if (result) {
      resolve(result)
    } else {
      setTimeout(tryIt, timeout)
    }
  }())
})
