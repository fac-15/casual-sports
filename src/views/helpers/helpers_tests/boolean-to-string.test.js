const booleanToString = require("../boolean-to-string.js")

test("True boolean should return Yes string", () => {
  return expect(booleanToString(true)).toBe("Yes");
})

test("True boolean should not return No string", () => {
  return expect(booleanToString(true)).not.toBe("No");
})

test("False boolean should return No string", () => {
  return expect(booleanToString(false)).toBe("No");
})

test("False boolean should not return Yes string", () => {
  return expect(booleanToString(false)).not.toBe("Yes");
})

test("Nonsense should return an error message", () => {
  return expect(booleanToString("Halleloo")).toBe("Invalid input");
})
