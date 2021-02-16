const productFib = require('./consecutiveFib');

describe('Product of consecutive Fib numbers', () => {
  test('Works with valid numbers', () => {
    expect(productFib(4895)).toStrictEqual([55, 89, true]);
    expect(productFib(74049690)).toStrictEqual([6765, 10946, true]);
    expect(productFib(193864606)).toStrictEqual([10946, 17711, true]);
    expect(productFib(602070)).toStrictEqual([610, 987, true]);
  });
  test('Works with invalid numbers', () => {
    expect(productFib(5895)).toStrictEqual([89, 144, false]);
    expect(productFib(84049690)).toStrictEqual([10946, 17711, false]);
    expect(productFib(447577)).toStrictEqual([610, 987, false]);
  });
});
