import curry from 'ramda/src/curry'
import merge from 'ramda/src/merge'

export default curry((k, v, o) => ({...o, [k]: merge(o[k], v)}))
