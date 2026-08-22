function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}
function applyDiscount(price, percent) {
  if (typeof price !== 'number' || typeof percent !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  if (percent < 0 || percent > 100) {
    throw new Error('Percent must be between 0 and 100');
  }
  return price - (price * percent / 100);
}

module.exports = { add, divide, applyDiscount };