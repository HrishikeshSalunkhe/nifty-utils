import { convertCase, convertToString } from '../../src/string/index';

describe('convertCase', () => {
  test('converts lowercase string to uppercase', () => {
    expect(convertCase('hello', 'upper')).toBe('HELLO');
  });

  test('converts uppercase string to lowercase', () => {
    expect(convertCase('WORLD', 'lower')).toBe('world');
  });

  test('mixed case string conversions', () => {
    expect(convertCase('HeLLo WoRLd', 'upper')).toBe('HELLO WORLD');
    expect(convertCase('HeLLo WoRLd', 'lower')).toBe('hello world');
  });

  // --- Edge cases ---
  test('empty string', () => {
    expect(convertCase('', 'upper')).toBe('');
    expect(convertCase('', 'lower')).toBe('');
  });

  test('string with spaces and special characters', () => {
    expect(convertCase('  hello 123! ', 'upper')).toBe('  HELLO 123! ');
    expect(convertCase('  HELLO 123! ', 'lower')).toBe('  hello 123! ');
  });

  // --- Invalid inputs ---
  test('number input throws TypeError', () => {
    expect(() => convertCase(123, 'upper')).toThrow(TypeError);
  });

  test('boolean input throws TypeError', () => {
    expect(() => convertCase(true, 'lower')).toThrow(TypeError);
  });

  test('null input throws TypeError', () => {
    expect(() => convertCase(null, 'upper')).toThrow(TypeError);
  });

  test('undefined input throws TypeError', () => {
    expect(() => convertCase(undefined, 'lower')).toThrow(TypeError);
  });

  // --- Mode safety (TypeScript ensures this, but JS consumers could bypass) ---
  test('invalid mode throws error in JS', () => {
    expect(() =>
      convertCase('hello', 'invalid' as unknown as 'upper' | 'lower')
    ).toThrow();
  });
});

describe('convertToString', () => {
  // --- Primitive types ---
  test('converts number to string', () => {
    expect(convertToString(123)).toBe('123');
    expect(convertToString(0)).toBe('0');
  });

  test('converts boolean to string', () => {
    expect(convertToString(true)).toBe('true');
    expect(convertToString(false)).toBe('false');
  });

  test('converts string to string (unchanged)', () => {
    expect(convertToString('hello')).toBe('hello');
    expect(convertToString('')).toBe('');
  });

  test('converts null and undefined to string', () => {
    expect(convertToString(null)).toBe('null');
    expect(convertToString(undefined)).toBe('undefined');
  });

  // --- Objects and arrays ---
  test('converts plain object to JSON string', () => {
    expect(convertToString({ a: 1, b: 2 })).toBe('{"a":1,"b":2}');
    expect(convertToString({})).toBe('{}');
  });

  test('converts array to JSON string', () => {
    expect(convertToString([1, 2, 3])).toBe('[1,2,3]');
    expect(convertToString([])).toBe('[]');
  });

  test('nested objects and arrays', () => {
    const value = { x: [1, { y: 2 }], z: 'test' };
    expect(convertToString(value)).toBe(JSON.stringify(value));
  });

  // --- Edge cases ---
  test('stringified object with special characters', () => {
    const value = { key: 'Hello\nWorld\t!' };
    expect(convertToString(value)).toBe(JSON.stringify(value));
  });

  test('number-like string remains unchanged', () => {
    expect(convertToString('123')).toBe('123');
  });
});

