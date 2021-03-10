import curry from 'ramda/src/curry'

export default curry((low, high, n) => n > low && n < high)
