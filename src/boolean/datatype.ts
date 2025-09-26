import { DATA_TYPES } from "../utils/constants";
/**
 * Checks if value is boolean
 * 
 * @param value - the input value to check
 * @returns true if input value is boolean, otheriwse false
 */
export function IsBoolean(value: any): boolean {
  return typeof value === DATA_TYPES.BOOLEAN;
}