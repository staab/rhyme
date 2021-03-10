/* eslint no-console: 0 */

import curry from 'ramda/src/curry'

export default curry((l, x) => console.log(l, x) || x)
