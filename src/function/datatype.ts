import { DATA_TYPES } from "../utils/constants";

export function IsFunction(value: any): boolean {
  return typeof value === DATA_TYPES.FUNCTION;
}