export default s => {
  const firstChar = s.slice(0, 1).toLowerCase()
  const rest = s
    .slice(1)
    .replace(/([A-Z])/g, m => ` ${m}`)
    .toLowerCase()
    .replace(/[-_\s]+(.)/g, (m, c) => c.toUpperCase())

  return firstChar + rest
}
