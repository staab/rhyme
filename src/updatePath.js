import curry from 'ramda/src/curry'
import getPath from 'ramda/src/path'
import assocPath from 'ramda/src/assocPath'

export default curry((p, f, o) => assocPath(p, f(getPath(p, o)), o))
