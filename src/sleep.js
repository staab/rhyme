import curry from 'ramda/src/curry'

export default curry(duration =>
  new Promise(resolve => setTimeout(() => resolve(null), duration)))
