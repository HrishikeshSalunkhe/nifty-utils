import { DATA_TYPES } from "../utils/constants";

export function IsBoolean(value: any): boolean {
  return typeof value === DATA_TYPES.BOOLEAN;
}