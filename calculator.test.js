const { add, divide, applyDiscount } = require('./calculator');

test('adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('throws when argument is not a number', () => {
  expect(() => add('a', 3)).toThrow('Both arguments must be numbers');
});

test('divides two numbers', () => {
  expect(divide(10, 2)).toBe(5);
});

test('throws when dividing by zero', () => {
  expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
});
test('applies a discount', () => {
  expect(applyDiscount(100, 10)).toBe(90);
});
test('throws when discount percentage is invalid', () => {
  expect(() => applyDiscount(100, -10)).toThrow('Both arguments must be numbers');
});
test('throws when price is not a number', () => {
  expect(() => applyDiscount('a', 10)).toThrow('Both arguments must be numbers');

  test('throws when percent is above 100', () => {
  expect(() => applyDiscount(100, 150)).toThrow('Percent must be between 0 and 100');
});

test('throws when percent is negative', () => {
  expect(() => applyDiscount(100, -20)).toThrow('Percent must be between 0 and 100');
});

test('handles boundary percentages', () => {
  expect(applyDiscount(100, 0)).toBe(100);
  expect(applyDiscount(100, 100)).toBe(0);
});
});