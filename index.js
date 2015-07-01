/**
 * Convert USD dollar amount to USD cents.
 *
 * How individual types are handled:
 *
 * - String: Replace symbols (`$,`), coerce, multiply, round.
 * - Number: Coerce, multiply, round.
 *
 * @param  {String|Number} amount Dollar
 * @return {Number}
 */
module.exports = function dollars_to_cents (amount) {
  if (typeof amount !== 'string' && typeof amount !== 'number') {
    throw new Error('Amount passed must be of type String or Number.')
  }

  return Math.round(100 * parseFloat(typeof amount === 'string' ? amount.replace(/[$,]/g, '') : amount))
}
