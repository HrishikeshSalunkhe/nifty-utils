import { DATA_TYPES } from "../utils/constants";

/**
 * Checks if value is undefined
 * 
 * @param value - the input value to check
 * @returns true if input value is null, otheriwse false
 */
export function IsUndefined(value: any): boolean {
  return typeof value === DATA_TYPES.UNDEFINED;
}