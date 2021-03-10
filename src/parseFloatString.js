import is from 'ramda/src/is'

const DOT_REGEXP = new RegExp(/\.+/)

export default (n, fallback = 0) => {
  if (is(Number, n) && !isNaN(n)) {
    return parseFloat(n)
  }

  n = parseFloat(n.toString().replace(DOT_REGEXP, '.').trim())

  return isNaN(n) ? fallback : n
}

