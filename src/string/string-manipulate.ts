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
export function convertCase(str: any, mode: 'upper' | 'lower'): string {
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

// functions to add
// convert string to Number
// convert string to boolean
// convert string to array
