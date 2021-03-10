import curry from 'ramda/src/curry'

export default curry((k, f, o) => ({...o, [k]: f(o[k])}))
