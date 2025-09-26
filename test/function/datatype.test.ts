import { IsFunction } from "../../src/function/index";

describe("IsFunction", () => {
  it("should return true for normal functions", () => {
    function testFn() { }
    const arrowFn = () => { };
    expect(IsFunction(testFn)).toBe(true);
    expect(IsFunction(arrowFn)).toBe(true);
  });

  it("should return false for null and undefined", () => {
    expect(IsFunction(null)).toBe(false);
    expect(IsFunction(undefined)).toBe(false);
  });

  it("should return false for numbers", () => {
    expect(IsFunction(0)).toBe(false);
    expect(IsFunction(123)).toBe(false);
  });

  it("should return false for strings", () => {
    expect(IsFunction("")).toBe(false);
    expect(IsFunction("hello")).toBe(false);
  });

  it("should return false for objects and arrays", () => {
    expect(IsFunction({})).toBe(false);
    expect(IsFunction([])).toBe(false);
  });

  it("should return false for booleans", () => {
    expect(IsFunction(true)).toBe(false);
    expect(IsFunction(false)).toBe(false);
  });

  it("should return false for non-existing key on object", () => {
    const obj: Record<string, any> = { a: 1 };
    expect(IsFunction(obj.b)).toBe(false); // undefined
  });
});
