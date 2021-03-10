export default s => {
  try {
    return JSON.parse(s)
  } catch (err) {
    return undefined
  }
}
