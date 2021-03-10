import curry from 'ramda/src/curry'

export default curry((l, r) => ({...r, ...l}))
