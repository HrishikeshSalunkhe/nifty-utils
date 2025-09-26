import { IsArray } from "../../src/array/index";

describe("IsArray", () => {
  it("should return true for empty array", () => {
    expect(IsArray([])).toBe(true);
  });

  it("should return true for arrays with elements", () => {
    expect(IsArray([1, 2, 3])).toBe(true);
    expect(IsArray(["a", "b"])).toBe(true);
  });

  it("should return false for objects", () => {
    expect(IsArray({})).toBe(false);
    expect(IsArray({ a: 1 })).toBe(false);
  });

  it("should return false for numbers", () => {
    expect(IsArray(0)).toBe(false);
    expect(IsArray(123)).toBe(false);
  });

  it("should return false for strings", () => {
    expect(IsArray("[]")).toBe(false);
    expect(IsArray("array")).toBe(false);
  });

  it("should return false for null and undefined", () => {
    expect(IsArray(null)).toBe(false);
    expect(IsArray(undefined)).toBe(false);
  });

  it("should return false for functions", () => {
    expect(IsArray(() => { })).toBe(false);
  });

  it("should return false for non-existing key on object", () => {
    const obj: Record<string, any> = { a: 1 };
    expect(IsArray(obj.b)).toBe(false); // undefined
  });
});
