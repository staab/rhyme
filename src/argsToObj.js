import fromPairs from 'ramda/src/fromPairs'

export default (ks, ...args) => {
  if (args.length) {
    return fromPairs(ks.map((k, i) => [k, args[i]]))
  }

  return (...moreArgs) => fromPairs(ks.map((k, i) => [k, moreArgs[i]]))
}
