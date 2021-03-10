import curry from 'ramda/src/curry'
import concat from 'ramda/src/concat'

export default curry((f, xs) => xs.map(f).reduce(concat, []))
