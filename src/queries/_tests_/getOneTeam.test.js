const getOneTeam = require("../getOneTeam");
const { refresh } = require("../../db/build.js");
const { team, error } = require("./test_fixtures");

describe("getOneEvent returns the data in the event with the id of 1", () => {
  test(`Assert that you can click the profile tab`, async done => {
    await refresh();
    expect(getOneTeam(1)).resolves.toEqual(team);
    done();
  }, 30000);
});
