import concat from 'ramda/src/concat'

export default (xs = []) => xs.reduce(concat, [])
