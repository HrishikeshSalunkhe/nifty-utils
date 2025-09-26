import { IsUndefined } from '../../src/undefined/index';

describe("IsUndefined", () => {
  it("should return true for undefined", () => {
    expect(IsUndefined(undefined)).toBe(true);
  });

  it("should return false for null", () => {
    expect(IsUndefined(null)).toBe(false);
  });

  it("should return false for numbers", () => {
    expect(IsUndefined(0)).toBe(false);
    expect(IsUndefined(123)).toBe(false);
  });

  it("should return false for strings", () => {
    expect(IsUndefined("")).toBe(false);
    expect(IsUndefined("hello")).toBe(false);
  });

  it("should return false for objects", () => {
    expect(IsUndefined({})).toBe(false);
    expect(IsUndefined([])).toBe(false);
  });

  it("should return false for functions", () => {
    expect(IsUndefined(() => { })).toBe(false);
  });

  // ✅ New scenario: non-existing key on object
  it("should return true for a key that does not exist on an object", () => {
    const obj: Record<string, any> = { a: 1 };
    expect(IsUndefined(obj.b)).toBe(true);
  });
});
