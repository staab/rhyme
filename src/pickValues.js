import curry from 'ramda/src/curry'

export default curry((ks, o) => ks.map(k => o[k]))
