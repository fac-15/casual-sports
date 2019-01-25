const getOneUser = require("../getOneUser");
const { refresh } = require("../../db/build.js");
const { user } = require("./test_fixtures");

describe("getOneUser returns the data in the event with the username charlie", () => {
  test(`getOneUser returns the data in the event with the username charlie`, async () => {
    await refresh();
    expect(getOneUser("charlie")).resolves.toEqual(user);
  });
});
