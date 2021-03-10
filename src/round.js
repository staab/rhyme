export default (precision, value) =>
  Math.round(value / Math.pow(10, precision)) * Math.pow(10, precision)
