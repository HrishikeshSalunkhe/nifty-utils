import { DATA_TYPES } from "../utils/constants";
/**
 * Checks if value is null
 * 
 * @param value - the input value to check
 * @returns true if input value is null, otheriwse false
 */
export function IsNull(value: any): boolean {
  return value === DATA_TYPES.NULL;
}