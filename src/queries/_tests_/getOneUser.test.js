const getOneUser = require("../getOneUser");
const { refresh } = require("../../db/build.js");
const { user } = require("./test_fixtures");

describe("getOneUser returns the data in the event with the id of 1", () => {
  test(`Assert that you can click the profile tab`, async done => {
    await refresh();
    expect(getOneUser("charlie")).resolves.toEqual(user);
    done();
  }, 30000);
});
