// Re implement tap to not be auto-curried like in ramda
export default f => x => {
  f(x)

  return x
}
