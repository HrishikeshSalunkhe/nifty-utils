import { IsNumber } from "../../src/number/index";

describe("IsNumber", () => {
  it("should return true for integers", () => {
    expect(IsNumber(0)).toBe(true);
    expect(IsNumber(123)).toBe(true);
    expect(IsNumber(-10)).toBe(true);
  });

  it("should return true for floats", () => {
    expect(IsNumber(3.14)).toBe(true);
    expect(IsNumber(-0.5)).toBe(true);
  });

  it("should return true for special numbers", () => {
    expect(IsNumber(NaN)).toBe(true);       // typeof NaN === 'number'
    expect(IsNumber(Infinity)).toBe(true);  // typeof Infinity === 'number'
  });

  it("should return false for strings", () => {
    expect(IsNumber("123")).toBe(false);
    expect(IsNumber("0")).toBe(false);
  });

  it("should return false for null and undefined", () => {
    expect(IsNumber(null)).toBe(false);
    expect(IsNumber(undefined)).toBe(false);
  });

  it("should return false for objects and arrays", () => {
    expect(IsNumber({})).toBe(false);
    expect(IsNumber([])).toBe(false);
  });

  it("should return false for booleans", () => {
    expect(IsNumber(true)).toBe(false);
    expect(IsNumber(false)).toBe(false);
  });

  it("should return false for functions", () => {
    expect(IsNumber(() => { })).toBe(false);
  });

  it("should return false for non-existing key on object", () => {
    const obj: Record<string, any> = { a: 1 };
    expect(IsNumber(obj.b)).toBe(false); // undefined
  });
});
