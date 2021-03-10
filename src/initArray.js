import map from 'ramda/src/map'

export default (l, f) => map(f, new Array(l))
