import round from 'rhyme/round'
import parseFloatString from 'rhyme/parseFloatString'

const million = Math.pow(10, 10)

const formatNumeric = (n, {precision} = {}) => {
  // Fix floating point weirdness: .07 * 100 === 7.000000000000001
  n = Math.round(n * 100 * million) / million

  return String(parseFloat(precision === undefined ? n : n.toFixed(precision)))
}

const parseNumeric = (display, {precision} = {}) => {
  const result = parseFloatString(display) / 100

  return precision === undefined ? result : round(precision, result)
}

const format = (n, opts = {}) => `${formatNumeric(n, opts)}%`

const parse = (n, ...args) => parseNumeric(n.replace('%', ''), ...args)

export default {parse, format, parseNumeric, formatNumeric}
