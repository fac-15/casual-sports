const getOneEvent = require("../getOneEvent");
const refresh = require("../../db/build.js");
const { event } = require("./test_fixtures");

test("the function returns the data in the event with the id of 1", () => {
  refresh.refresh((error, response) => {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    expect.assertions(1);
    return expect(getOneEvent(1)).resolves.toEqual(event);
  });
});

test("the fetch fails with an error", () => {
  refresh.refresh((error, response) => {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    expect.assertions(1);
    return expect(getOneEvent("potatoes")).rejects.toMatch(error);
  });
});
