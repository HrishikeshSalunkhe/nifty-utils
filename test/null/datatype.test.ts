import { IsNull } from "../../src/null/index";

describe("IsNull", () => {
  it("should return true for null", () => {
    expect(IsNull(null)).toBe(true);
  });

  it("should return false for undefined", () => {
    expect(IsNull(undefined)).toBe(false);
  });

  it("should return false for numbers", () => {
    expect(IsNull(0)).toBe(false);
    expect(IsNull(123)).toBe(false);
    expect(IsNull(NaN)).toBe(false);
  });

  it("should return false for strings", () => {
    expect(IsNull("")).toBe(false);
    expect(IsNull("hello")).toBe(false);
  });

  it("should return false for objects and arrays", () => {
    expect(IsNull({})).toBe(false);
    expect(IsNull([])).toBe(false);
  });

  it("should return false for booleans", () => {
    expect(IsNull(true)).toBe(false);
    expect(IsNull(false)).toBe(false);
  });

  it("should return false for functions", () => {
    expect(IsNull(() => { })).toBe(false);
  });

  it("should return false for non-existing key on object", () => {
    const obj: Record<string, any> = { a: 1 };
    expect(IsNull(obj.b)).toBe(false); // undefined
  });
});
