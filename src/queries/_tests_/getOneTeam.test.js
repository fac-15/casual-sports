const getOneTeam = require("../getOneTeam");
const dbBuild = require("../../db/db_build.js");
const { team } = require("./test_fixtures");

test("Testing results for team id 1", () => {
  dbBuild((error, response) => {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    return expect(getOneTeam(1)).resolves.toEqual(team);
  });
});

test("Testing invalid input returns false", () => {
  dbBuild((error, response) => {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    return getOneTeam("sdfkgjndfkjg").catch(e =>
      expect(e).toEqual(
        'error: invalid input syntax for integer: "sdfkgjndfkjg"'
      )
    );
  });
});
