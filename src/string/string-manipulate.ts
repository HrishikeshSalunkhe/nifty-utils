import { isNonNullObject } from "../object";
import { IsString } from "./datatype";

/**
 * Converts a given string to either uppercase or lowercase letters.
 *
 * This function takes an input value and mode of conversion
 * If the input is not a string, converts it to the specified case. 
 * If the input is not a string, it throws a TypeError.
 *
 * @param str - The input value to convert.
 * @param mode - The case conversion mode: 'upper' for uppercase, 'lower' for lowercase.
 * @returns The converted string in the specified case.
 * @throws {TypeError} If the input is not a string.
 */
export function convertCase (str: unknown, mode: 'upper' | 'lower'): string {
  if (!IsString(str)) {
    throw new TypeError(`Expected a string, received ${typeof str}`);
  }

  switch (mode) {
    case 'upper':
      return str.toUpperCase();
    case 'lower':
      return str.toLowerCase();
    default: 
      throw new Error(`Invalid mode '${mode}'. Use 'upper' or 'lower'.`);
  }
}

/**
 * Converts a value to its string representation.
 *
 * This function handles different types of input safely:
 * - Numbers and booleans are converted using `String()`.
 * - Arrays and plain objects are converted to a JSON string.
 * - `null` and `undefined` are converted to `"null"` and `"undefined"`.
 *
 * @param value - The value to convert to a string.
 * @returns A string representation of the input value.
 */
export function convertToString (value: unknown): string {
  if (isNonNullObject(value)) {
    return JSON.stringify(value);
  }
  return String(value);
}