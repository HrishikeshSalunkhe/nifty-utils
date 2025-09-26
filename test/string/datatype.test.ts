import { IsString } from "../../src/string/index";

describe("IsString", () => {
  it("should return true for normal strings", () => {
    expect(IsString("hello")).toBe(true);
    expect(IsString("world")).toBe(true);
  });

  it("should return true for empty string", () => {
    expect(IsString("")).toBe(true);
  });

  it("should return false for numbers", () => {
    expect(IsString(0)).toBe(false);
    expect(IsString(123)).toBe(false);
  });

  it("should return false for objects", () => {
    expect(IsString({})).toBe(false);
    expect(IsString({ a: "b" })).toBe(false);
  });

  it("should return false for arrays", () => {
    expect(IsString([])).toBe(false);
    expect(IsString(["a", "b"])).toBe(false);
  });

  it("should return false for boolean values", () => {
    expect(IsString(true)).toBe(false);
    expect(IsString(false)).toBe(false);
  });

  it("should return false for null and undefined", () => {
    expect(IsString(null)).toBe(false);
    expect(IsString(undefined)).toBe(false);
  });

  it("should return false for functions", () => {
    expect(IsString(() => { })).toBe(false);
  });

  // ✅ Optional: key not existing on object
  it("should return false for non-existing key on an object", () => {
    const obj: Record<string, any> = { a: 1 };
    expect(IsString(obj.b)).toBe(false);
  });
});
