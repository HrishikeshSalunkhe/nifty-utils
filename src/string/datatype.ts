import { DATA_TYPES } from "../utils/constants";

/**
 * Checks if value is string
 * 
 * @param value - the input value to check
 * @returns true if input value is string, otheriwse false
 */
export function IsString(value: any): boolean {
  return typeof value === DATA_TYPES.STRING;
}