import parseFloatString from 'rhyme/parseFloatString'

export default (n, fallback = 0) => parseInt(parseFloatString(n, fallback), 10)
