const { yesOrNo } = require("../index.js")

test("True boolean should return Yes string", () => {
  return expect(yesOrNo(true)).toBe("Yes");
})

test("True boolean should not return No string", () => {
  return expect(yesOrNo(true)).not.toBe("No");
})

test("False boolean should return No string", () => {
  return expect(yesOrNo(false)).toBe("No");
})

test("False boolean should not return Yes string", () => {
  return expect(yesOrNo(false)).not.toBe("Yes");
})

test("Nonsense should return an error message", () => {
  return expect(yesOrNo("Halleloo")).toBe("Invalid input");
})
