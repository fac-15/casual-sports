const getOneTeam = require("../getOneTeam");
const dbBuild = require("../../db/db_build.js");
const teams = require("./test_fixtures");

test("Testing results for team id 1", () => {
  dbBuild((error, response) => {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    return expect(getOneTeam(1)).resolves.toEqual(teams[0]);
  });
});

test("Testing properties for team id 1", () => {
  dbBuild((error, response) => {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    return expect(getOneTeam(1)).resolves.toHaveProperty("id");
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
