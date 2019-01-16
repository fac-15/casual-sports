const getOneEvent = require("../getOneEvent");
const dbBuild = require("../../db/db_build.js");

const funAtThePark = [
  {
    id: 1,
    name: "fun at the park",
    sport: "Football",
    users_id: 1,
    location: "london",
    genders: 3,
    open: true
  }
];

// const error = "error: invalid input syntax for integer: \"potatoes\"";

test("the function returns the data in the event with the id of 1", () => {
  dbBuild(function(error, response) {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    expect.assertions(1);
    return expect(getOneEvent(1)).resolves.toEqual(funAtThePark);
  });
});

test("the fetch fails with an error", () => {
  dbBuild(function(error, response) {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    expect.assertions(1);
    return expect(getOneEvent("potatoes")).rejects.toMatch(error);
  });
});
