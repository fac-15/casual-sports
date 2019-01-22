const getAllData = require("../getAllData");
const dbBuild = require("../../db/db_build.js");
const { events, teams } = require("./test_fixtures");

describe("Check that getTableData returns the appropriate data/errors", () => {
  test("getTableData returns all of the events table data", () => {
    dbBuild((error, response) => {
      if (error) return console.log("ERROR IN DBBUILD: " + error);
      expect.assertions(1);
      return expect(getAllData.getTableData("events")).resolves.toEqual(events);
    });
  });

  test("getTableData fails with an error", () => {
    dbBuild((error, response) => {
      if (error) return console.log("ERROR IN DBBUILD: " + error);
      const msg = "OMG EXPLOSIONS";
      return expect(getAllData.getTableData(new Error())).rejects.toThrow(msg);
    });
  });

  test("getTableData returns all of the teams data", () => {
    dbBuild((error, response) => {
      if (error) return console.log("ERROR IN DBBUILD: " + error);
      expect.assertions(1);
      return expect(getAllData.getTableData("teams")).resolves.toEqual(teams);
    });
  });

  test("getTableData fails with an error", () => {
    dbBuild((error, response) => {
      if (error) return console.log("ERROR IN DBBUILD: " + error);
      const msg = "OMG EXPLOSIONS";
      return expect(getAllData.getTableData(new Error())).rejects.toThrow(msg);
    });
  });
});
