export default () => {
  // Stack promises to avoid race conditions
  let latest = Promise.resolve()

  return function track(cur) {
    // Update our latest promise
    latest = cur

    // Detect whether track got called again by comparing cur
    // against latest. If cur is obsolete, return latest instead.
    const guard = cb => result => cur === latest ? cb(result) : track(latest)

    return Promise.resolve(cur).then(
      guard(x => Promise.resolve(x)),
      guard(x => Promise.reject(x))
    )
  }
}
