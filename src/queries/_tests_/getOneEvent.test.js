const getOneEvent = require("../getOneEvent");
const dbBuild = require("../../db/db_build.js");
const { events } = require("./test_fixtures");

// const error = "error: invalid input syntax for integer: \"potatoes\"";

test("the function returns the data in the event with the id of 1", () => {
  dbBuild((error, response) => {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    expect.assertions(1);
    return expect(getOneEvent(1)).resolves.toEqual(events[0]);
  });
});

// test("the fetch fails with an error", () => {
//   dbBuild(function(error, response) {
//     if (error) return console.log("ERROR IN DBBUILD: " + error);
//     expect.assertions(1);
//     return expect(getOneEvent("potatoes")).rejects.toMatch(error);
//   });
// });
