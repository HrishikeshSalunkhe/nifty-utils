import { DATA_TYPES } from "../utils/constants";
/**
 * Checks if value is function
 * 
 * @param value - the input value to check
 * @returns true if input value is function, otheriwse false
 */
export function IsFunction(value: any): boolean {
  return typeof value === DATA_TYPES.FUNCTION;
}