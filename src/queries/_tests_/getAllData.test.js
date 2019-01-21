const getAllData = require("../getAllData");
const dbBuild = require("../../db/db_build.js");
const { events, teams } = require("./test_fixtures");

test("the function returns all of the event data", () => {
  dbBuild((error, response) => {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    expect.assertions(1);
    return expect(getAllData.getTableData("events")).resolves.toEqual(events);
  });
});

// test("the function fails with an error", () => {
//   dbBuild(function(error, response) {
//     if (error) return console.log("ERROR IN DBBUILD: " + error);
//     const msg = "OMG EXPLOSIONS";
//     return expect(getAllData.getTableData(new Error())).rejects.toThrow(msg);
//   });
// });

test("the function returns all of the team data", () => {
  dbBuild((error, response) => {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    expect.assertions(1);
    return expect(getAllData.getTableData("teams")).resolves.toEqual(teams);
  });
});

// test("the function fails with an error", () => {
//   dbBuild(function(error, response) {
//     if (error) return console.log("ERROR IN DBBUILD: " + error);
//     const msg = "OMG EXPLOSIONS";
//     return expect(getAllData.getTableData(new Error())).rejects.toThrow(msg);
//   });
// });
