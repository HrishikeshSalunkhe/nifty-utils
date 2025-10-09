import { DATA_TYPES } from "../utils/constants";

/**
 * Checks if value is an object (includes null and arrays)
 * 
 * @param value - the input value to check
 * @returns true if input value is value is an object (includes null and arrays), otheriwse false
 */
export function IsObject(value: any): boolean {
  return typeof value === DATA_TYPES.OBJECT;
}

/**
 * Checks if value is a non-null object (includes arrays)
 * 
 * @param value - the input value to check
 * @returns true if input value is a non-null object (includes arrays), otheriwse false
 */
export function isNonNullObject(value: unknown): value is object {
  return value !== null && typeof value === DATA_TYPES.OBJECT;
}

/**
 * Checks if value is a plain object (not null, not array, not special objects)
 * 
 * @param value - the input value to check
 * @returns true if input value is a plain object (not null, not array, not special objects), otheriwse false
 */
export function isObjectLiteral(value: any): boolean {
  return (
    value !== null &&
    typeof value === DATA_TYPES.OBJECT &&
    !Array.isArray(value) &&
    Object.getPrototypeOf(value) === Object.prototype
  );
}
