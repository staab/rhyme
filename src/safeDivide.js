import round from 'rhyme/round'

export default (a, b, precision = 0) => b === 0 ? 0 : round(precision, a / b)
