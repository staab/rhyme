import map from 'ramda/src/map'

export default (l, x) => map(() => x, new Array(l))
