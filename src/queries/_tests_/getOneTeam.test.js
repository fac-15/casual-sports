const getOneTeam = require("../getOneTeam");
const dbBuild = require("../../db/db_build.js");
const { team } = require("./test_fixtures");

const error = {
  error: `[error: invalid input syntax for integer: "potatoes"]`
};

describe("Check that getOneEvent returns the appropriate data/errors", () => {
  test("getOneTeam gets team in id 1", () => {
    dbBuild((error, response) => {
      if (error) return console.log("ERROR IN DBBUILD: " + error);
      return expect(getOneTeam(1)).resolves.toEqual(team);
    });
  });

  // test("getOneTeam fails with invalid input", () => {
  //   dbBuild((error, response) => {
  //     if (error) return console.log("ERROR IN DBBUILD: " + error);
  //     expect.assertions(1);
  //     return expect(getOneTeam("potatoes")).rejects.toMatch(error);
  //   });
  // });
});
