export default nestedArray => {
  const result = []

  nestedArray.forEach((inner, outerIdx) =>
    inner.forEach((value, innerIdx) => {
      result[innerIdx] = result[innerIdx] || []
      result[innerIdx][outerIdx] = value
    }))

  return result
}
