const { numToDate } = require("../index.js");

test("Number 1548360000000 should return 'Thursday, January 24th, 2019, 8:00 PM' string", () =>
  expect(numToDate(1548360000000)).toBe("Thursday, January 24th, 2019, 8:00 PM"));

test("Number 1548360000000  should not return Quite competitive string", () =>
  expect(numToDate(1548360000000 )).not.toBe("Quite competitive"));

