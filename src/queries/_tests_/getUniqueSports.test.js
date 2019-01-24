const getUniqueSports = require("../getUniqueSports");
const { refresh } = require("../../db/build.js");
const { sports } = require("./test_fixtures");

describe("getOneEvent returns the data in the event with the id of 1", () => {
  test(`Assert that you can click the profile tab`, async done => {
    await refresh();
    expect(getUniqueSports()).resolves.toEqual(sports);
    done();
  }, 30000);
});
