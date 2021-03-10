export default (old, neu) => ({
  added: neu.filter(x => !old.includes(x)),
  removed: old.filter(x => !neu.includes(x)),
  mutual: old.filter(x => neu.includes(x)),
})
