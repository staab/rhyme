import curry from 'ramda/src/curry'
import merge from 'ramda/src/merge'
import getPath from 'ramda/src/path'
import assocPath from 'ramda/src/assocPath'

export default curry((p, x, o) => assocPath(p, merge(getPath(p, o), x), o))
