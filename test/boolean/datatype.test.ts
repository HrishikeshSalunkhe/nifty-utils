import { IsBoolean } from "../../src/boolean/index";

describe("IsBoolean", () => {
  it("should return true for true and false", () => {
    expect(IsBoolean(true)).toBe(true);
    expect(IsBoolean(false)).toBe(true);
  });

  it("should return false for numbers", () => {
    expect(IsBoolean(0)).toBe(false);
    expect(IsBoolean(1)).toBe(false);
    expect(IsBoolean(123)).toBe(false);
  });

  it("should return false for strings", () => {
    expect(IsBoolean("true")).toBe(false);
    expect(IsBoolean("false")).toBe(false);
    expect(IsBoolean("")).toBe(false);
  });

  it("should return false for null and undefined", () => {
    expect(IsBoolean(null)).toBe(false);
    expect(IsBoolean(undefined)).toBe(false);
  });

  it("should return false for objects and arrays", () => {
    expect(IsBoolean({})).toBe(false);
    expect(IsBoolean([])).toBe(false);
  });

  it("should return false for functions", () => {
    expect(IsBoolean(() => { })).toBe(false);
  });

  it("should return false for non-existing key on object", () => {
    const obj: Record<string, any> = { a: 1 };
    expect(IsBoolean(obj.b)).toBe(false); // undefined
  });
});
