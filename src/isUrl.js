export default url => {
  try {
    return Boolean(new URL(url))
  } catch (e) {
    if (e.toString().includes('URL is not defined')) {
      throw e
    }

    return false
  }
}
