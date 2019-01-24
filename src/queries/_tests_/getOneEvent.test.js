const getOneEvent = require("../getOneEvent");
const { refresh } = require("../../db/build.js");
const { event, error } = require("./test_fixtures");

describe("getOneEvent returns the data in the event with the id of 1", () => {
  test(`Assert that you can click the profile tab`, async done => {
    await refresh();
    expect(getOneEvent(1)).resolves.toEqual(event);
    done();
  }, 30000);
});
