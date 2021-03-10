import uniq from 'ramda/src/uniq'
import keys from 'ramda/src/keys'
import equals from 'ramda/src/equals'

export default (a, b) => {
  const diff = []

  uniq(keys(a).concat(keys(b))).forEach(k => {
    const aJson = JSON.stringify(a[k])
    const bJson = JSON.stringify(b[k])

    if (a[k] === undefined && b[k] !== undefined) {
      diff.push(`"${k}" is new: ${bJson}`)
    } else if (b[k] === undefined && a[k] !== undefined) {
      diff.push(`"${k}" was removed: ${aJson}`)
    } else if (!equals(a[k], b[k])) {
      diff.push(`"${k}" was changed: ${aJson} -> ${bJson}`)
    } else if (a[k] !== b[k]) {
      diff.push(`"${k}" was changed by identity, but not value`)
    }
  })

  return diff.sort()
}
