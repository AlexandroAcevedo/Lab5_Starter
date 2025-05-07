// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';


describe('isPhoneNumber()', () => {
  test('should return true for valid phone number (with area code)', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('should return true for valid phone number (without area code)', () => {
    expect(isPhoneNumber('456-7890')).toBe(true);
  });

  test('single digit casw ', () => {
    expect(isPhoneNumber('1')).toBe(false);
  });

  test('should return false for non-numeric phone num', () => {
    expect(isPhoneNumber('kur-rim-anju')).toBe(false);
  });
});

describe('isEmail()', () => {
  test('should return true for valid email', () => {
    expect(isEmail('kurimanju@example.com')).toBe(true);
  });

  test('should return true for valid email with underscore', () => {
    expect(isEmail('kuri_manju@domain.org')).toBe(true);
  });

  test('should return false for email without "@" symbol', () => {
    expect(isEmail('PowellRulez.com')).toBe(false);
  });

  test('should return false for email with invalid domain', () => {
    expect(isEmail('user@domain.sigmanation')).toBe(false);
  });
});

describe('isStrongPassword()', () => {
  test('should return true for valid strong password', () => {
    expect(isStrongPassword('Abcd1234')).toBe(true);
  });

  test('should return true for valid password with underscore', () => {
    expect(isStrongPassword('A1_bz')).toBe(true);
  });

  test('should return false for password starting with a number', () => {
    expect(isStrongPassword('420Blaze')).toBe(false);
  });

  test('should return false for password with special characters', () => {
    expect(isStrongPassword('I40ve$')).toBe(false);
  });
});

describe('isDate()', () => {
  test('should return true for valid date with single digits', () => {
    expect(isDate('3/5/2023')).toBe(true);
  });

  test('should return true for valid date with double digits', () => {
    expect(isDate('12/24/2004')).toBe(true);
  });

  test('should return false for invalid date format', () => {
    expect(isDate('2023/12/31')).toBe(false);
  });

  test('should return false for incomplete date', () => {
    expect(isDate('12/30')).toBe(false);
  });
});

describe('isHexColor()', () => {
  test('should return true for valid 3-digit hex color', () => {
    expect(isHexColor('#FFF')).toBe(true);
  });

  test('should return true for valid 6-digit hex color', () => {
    expect(isHexColor('#123ABC')).toBe(true);
  });

  test('should return false for hex color with more that 6', () => {
    expect(isHexColor('1234567')).toBe(false);
  });

  test('should return false for hex color with invalid characters', () => {
    expect(isHexColor('#ZZZ420')).toBe(false);
  });
});