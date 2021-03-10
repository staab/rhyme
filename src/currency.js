import parseFloatString from 'rhyme/parseFloatString'

let symbol = '$'

const getSymbol = () => symbol

const setSymbol = s => {
  symbol = s
}

const formatNumeric = x => {
  const [dollars, cents] = parseFloat(x / 100).toFixed(2).split('.')

  return [
    dollars.split('').reverse().reduce((acc, n, i) => n + (i && !(i % 3) ? ',' : '') + acc, '.'),
    cents,
  ].join('')
}

const parseNumeric = display =>
  Math.round(parseFloatString(display.replace(/,/g, '')) * 100)

const format = cents =>
  cents >= 0
    ? `${symbol}${formatNumeric(cents)}`
    : `-${symbol}${formatNumeric(Math.abs(cents))}`

const parse = display =>
  parseNumeric(display.replace(symbol, ''))

const formatDollars = cents => format(cents).slice(0, -3)

const parseDollars = display => parse(`${display}.00`)

const formatK = cents => {
  if (cents < 1000000) {
    return formatDollars(cents)
  }

  const k = formatDollars(cents / 1000)
  const h = Math.floor(cents % 1000 / 100)

  return h ? `${k}.${h}k` : `${k}k`
}

export default {
  getSymbol, setSymbol, parse, format, parseNumeric, formatNumeric,
  formatDollars, parseDollars, formatK,
}
