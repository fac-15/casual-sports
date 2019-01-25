const getOneEvent = require("../getOneEvent");
const { refresh } = require("../../db/build.js");
const { event } = require("./test_fixtures");

describe("testing getOneEvent", () => {
  test(`getOneEvent returns the data in the event with the id of 1`, async () => {
    await refresh();
    expect(getOneEvent(1)).resolves.toEqual(event);
    await expect(getOneEvent("tea")).rejects.toThrow(
      "invalid input syntax for integer"
    );
  });
});
