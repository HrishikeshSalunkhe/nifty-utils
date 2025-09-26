import { DATA_TYPES } from "../utils/constants";

export function IsObject(value: any): boolean {
  return typeof value === DATA_TYPES.OBJECT;
}

export function isNonNullObject(value: any): boolean {
  return value !== null && typeof value === DATA_TYPES.OBJECT;
}