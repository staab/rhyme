export default (n, label, pluralLabel) => {
  if (n === 1) {
    return `${n} ${label}`
  }

  pluralLabel = pluralLabel || `${label}s`

  return `${n} ${pluralLabel}`
}
