const { skillz } = require("../index.js");

test("Number 1 should return Super casual string", () => {
  return expect(skillz(1)).toBe("Super casual");
})

test("Number 1 should not return Quite competitive string", () => {
    return expect(skillz(1)).not.toBe("Quite competitive");
  })

  test("Number 2 should return Reasonably fit string", () => {
    return expect(skillz(2)).toBe("Reasonably fit");
  })

  test("Number 2 should not return Super casual string", () => {
      return expect(skillz(2)).not.toBe("Super casual");
    })

    test("Number 3 should return Quite competitive string", () => {
        return expect(skillz(3)).toBe("Quite competitive");
      })

      test("Number 3 should not return Reasonably fit string", () => {
          return expect(skillz(3)).not.toBe("Reasonably fit");
        })

test("String should return error message", () => {
    return expect(skillz("boomshackalack")).toBe("Invalid input");
  })
