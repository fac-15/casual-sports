const getOneEvent = require("../getOneEvent");
const { refresh } = require("../../db/build.js");
const { event, error } = require("./test_fixtures");

describe("testing getOneEvent", () => {
  test(`getOneEvent returns the data in the event with the id of 1`, async done => {
    await refresh();
    expect(getOneEvent(1)).resolves.toEqual(event);
    done();
  }, 30000);
});
