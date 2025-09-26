import { IsObject, isNonNullObject } from "./objectUtils";

describe("IsObject", () => {
  it("should return true for objects", () => {
    expect(IsObject({})).toBe(true);
    expect(IsObject({ a: 1 })).toBe(true);
  });

  it("should return true for arrays", () => {
    expect(IsObject([])).toBe(true);
    expect(IsObject([1, 2, 3])).toBe(true);
  });

  it("should return true for null (typeof null is 'object')", () => {
    expect(IsObject(null)).toBe(true);
  });

  it("should return false for primitives", () => {
    expect(IsObject(123)).toBe(false);
    expect(IsObject("hello")).toBe(false);
    expect(IsObject(true)).toBe(false);
    expect(IsObject(undefined)).toBe(false);
  });

  it("should return false for functions", () => {
    expect(IsObject(() => { })).toBe(false);
  });

  it("should return false for non-existing key on object", () => {
    const obj: Record<string, any> = { a: 1 };
    expect(IsObject(obj.b)).toBe(false); // undefined
  });
});

describe("isNonNullObject", () => {
  it("should return true for non-null objects", () => {
    expect(isNonNullObject({})).toBe(true);
    expect(isNonNullObject({ a: 1 })).toBe(true);
    expect(isNonNullObject([])).toBe(true); // arrays count as objects
  });

  it("should return false for null", () => {
    expect(isNonNullObject(null)).toBe(false);
  });

  it("should return false for primitives", () => {
    expect(isNonNullObject(123)).toBe(false);
    expect(isNonNullObject("hello")).toBe(false);
    expect(isNonNullObject(true)).toBe(false);
    expect(isNonNullObject(undefined)).toBe(false);
  });

  it("should return false for functions", () => {
    expect(isNonNullObject(() => { })).toBe(false);
  });

  it("should return false for non-existing key on object", () => {
    const obj: Record<string, any> = { a: 1 };
    expect(isNonNullObject(obj.b)).toBe(false); // undefined
  });
});
