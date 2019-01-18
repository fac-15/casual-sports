const { reverseDate } = require("../index.js");

test("2019-05-22 should return 22-05-2019", () => {
  return expect(reverseDate("2019-05-22")).toBe("22-05-2019");
});

test("2019-05-22 should not return 2019-22-05", () => {
  return expect(reverseDate("2019-05-22")).not.toBe("2019-22-05");
});
