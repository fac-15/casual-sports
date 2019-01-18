const { genders } = require("../index.js");

test("Number 1 should return Mixed string", () =>
  expect(genders(1)).toBe("Mixed"));

test("Number 1 should not return All-Female string", () =>
  expect(genders(1)).not.toBe("All-Female"));

test("Number 2 should return All-Male string", () =>
  expect(genders(2)).toBe("All-Male"));

test("Number 2 should not return All-Female string", () =>
  expect(genders(2)).not.toBe("All-Female"));

test("Number 3 should return All-Female string", () =>
  expect(genders(3)).toBe("All-Female"));

test("Number 3 should not return All-Male", () =>
  expect(genders(3)).not.toBe("All-Male"));

test("Number 4 should return Other string", () =>
  expect(genders(4)).toBe("Other"));

test("Number 4 should not return All-Male", () =>
  expect(genders(4)).not.toBe("All-Male"));

test("String should return error message", () =>
  expect(genders("boomshackalack")).toBe("Invalid input"));
