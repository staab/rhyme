// Create a nicer-looking iife
//
// const result = doto(something, x => {
//   // redacted
// })

export default (x, f) => f(x)
