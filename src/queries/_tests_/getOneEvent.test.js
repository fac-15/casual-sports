const getOneEvent = require("../getOneEvent");
const dbBuild = require("../../db/db_build.js");
const { event } = require("./test_fixtures");

const error = {
  error: `[error: invalid input syntax for integer: "potatoes"]`
};

describe("Check that getOneEvent returns the appropriate data/errors", () => {
  test("getOneEvent returns the data in the event with the id of 1", () => {
    dbBuild((error, response) => {
      if (error) return console.log("ERROR IN DBBUILD: " + error);
      expect.assertions(1);
      return expect(getOneEvent(1)).resolves.toEqual(event);
    });
  });

  test("getOneEvent fails with invalid input", () => {
    dbBuild((error, response) => {
      if (error) return console.log("ERROR IN DBBUILD: " + error);
      expect.assertions(1);
      return expect(getOneEvent("potatoes")).rejects.toMatch(error);
    });
  });
});
