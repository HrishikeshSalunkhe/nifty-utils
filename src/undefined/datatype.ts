import { DATA_TYPES } from "../utils/constants";

export function IsUndefined(value:any): boolean {
  return typeof value === DATA_TYPES.UNDEFINED;
}