import last from 'ramda/src/last'

export default (xs, conj = 'and', max = 6) => {
  if (xs.length === 0) {
    return ''
  } else if (xs.length === 1) {
    return xs[0]
  } else if (xs.length === 2) {
    return `${xs[0]} ${conj} ${xs[1]}`
  } else if (xs.length > max + 2) {
    return `${xs.slice(0, max).join(', ')}, ${conj} ${xs.length - max} others`
  }

  return `${xs.slice(0, -1).join(', ')}, ${conj} ${last(xs)}`
}
