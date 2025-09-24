import { DATA_TYPES } from "../utils/constants";

export function IsString(value:any): boolean {
  return typeof value === DATA_TYPES.STRING;
}