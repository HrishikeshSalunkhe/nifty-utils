import { DATA_TYPES } from "../utils/constants";

// True if value is an object (includes null and arrays)
export function IsObject(value: any): boolean {
  return typeof value === DATA_TYPES.OBJECT;
}

// True if value is a non-null object (includes arrays)
export function isNonNullObject(value: any): boolean {
  return value !== null && typeof value === DATA_TYPES.OBJECT;
}

// True if value is a plain object (not null, not array, not special objects)
export function isObjectLiteral(value: any): boolean {
  return (
    value !== null &&
    typeof value === DATA_TYPES.OBJECT &&
    !Array.isArray(value) &&
    Object.getPrototypeOf(value) === Object.prototype
  );
}
