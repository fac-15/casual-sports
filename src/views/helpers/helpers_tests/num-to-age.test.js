const ageRange = require("../num-to-age.js")

test("Number 1 should return 18-21 string", () => {
  return expect(ageRange(1)).toBe("18-21");
})

test("Number 1 should not return 66 and over string", () => {
    return expect(ageRange(3)).not.toBe("66 and over");
  })

  test("Number 2 should return 22-40 string", () => {
    return expect(ageRange(2)).toBe("22-40");
  })
  
  test("Number 2 should not return 18-21 string", () => {
      return expect(ageRange(2)).not.toBe("18-21");
    })

    test("Number 3 should return 41-65 string", () => {
        return expect(ageRange(3)).toBe("41-65");
      })
      
      test("Number 3 should not return 18-21 string", () => {
          return expect(ageRange(3)).not.toBe("18-21");
        })

        test("Number 4 should return 66 and over string", () => {
            return expect(ageRange(4)).toBe("66 and over");
          })
          
          test("Number 4 should not return 18-21 string", () => {
              return expect(ageRange(4)).not.toBe("18-21");
            })
  
test("String should return error message", () => {
    return expect(ageRange("boomshackalack")).toBe("Invalid input");
  })
  