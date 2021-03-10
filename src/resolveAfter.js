import curry from 'ramda/src/curry'

export default curry((duration, value) =>
  new Promise(resolve => setTimeout(() => resolve(value), duration)))
