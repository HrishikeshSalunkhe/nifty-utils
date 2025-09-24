import { DATA_TYPES } from "../utils/constants";

export function IsNumber(value: any): boolean {
  return typeof value === DATA_TYPES.NUMBER;
}