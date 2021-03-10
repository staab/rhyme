import curry from 'ramda/src/curry'

export default curry((i, n, v) => v.slice(0, i).concat(v.slice(i + n)))
