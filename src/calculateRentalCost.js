const DAILY_RENTAL_RATE = 40;
const LONG_TERM = 7;
const SHORT_TERM = 3;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM_DISCOUNT = 20;

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days < SHORT_TERM) {
    return days * DAILY_RENTAL_RATE;
  } else if (days < LONG_TERM) {
    return days * DAILY_RENTAL_RATE - SHORT_TERM_DISCOUNT;
  }

  return days * DAILY_RENTAL_RATE - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
