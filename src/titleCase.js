export default s =>
  s.replace(/([a-z])([A-Z0-9])/g, '$1 $2')
   .replace(/([0-9])([^0-9])/g, '$1 $2')
   .replace(/[-_\s]+/g, ' ')
   .toLowerCase()
   .split(' ')
   .map(x => x.slice(0, 1).toUpperCase() + x.slice(1))
   .join(' ')
