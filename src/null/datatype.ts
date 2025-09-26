import { DATA_TYPES } from "../utils/constants";

export function IsNull(value: any): boolean {
  return value === DATA_TYPES.NULL;
}