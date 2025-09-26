import { DATA_TYPES } from "../utils/constants";
/**
 * Checks if value is number
 * 
 * @param value - the input value to check
 * @returns true if input value is number, otheriwse false
 */
export function IsNumber(value: any): boolean {
  return typeof value === DATA_TYPES.NUMBER;
}