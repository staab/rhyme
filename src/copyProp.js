import curry from 'ramda/src/curry'

export default curry((a, b, o) => ({...o, [b]: o[a]}))
