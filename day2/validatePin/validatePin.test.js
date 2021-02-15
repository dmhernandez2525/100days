const validatePin = require('./validatePin');

describe('validatePin', () => {
  it('should return False for pins with length other than 4 or 6', () => {
    expect(validatePin('1')).toBe(false);
    expect(validatePin('12')).toBe(false);
    expect(validatePin('123')).toBe(false);
    expect(validatePin('12345')).toBe(false);
    expect(validatePin('1234567')).toBe(false);
    expect(validatePin('-1234')).toBe(false);
    expect(validatePin('1.234')).toBe(false);
    expect(validatePin('-1.234')).toBe(false);
    expect(validatePin('00000000')).toBe(false);
  });

  it('should return False for pins which contain characters other than digits', () => {
    expect(validatePin('a234')).toBe(false);
    expect(validatePin('.234')).toBe(false);
  });

  it('should return True for valid pins', () => {
    expect(validatePin('1234')).toBe(true);
    expect(validatePin('0000')).toBe(true);
    expect(validatePin('1111')).toBe(true);
    expect(validatePin('123456')).toBe(true);
    expect(validatePin('098765')).toBe(true);
    expect(validatePin('000000')).toBe(true);
    expect(validatePin('123456')).toBe(true);
    expect(validatePin('090909')).toBe(true);
  });
});
