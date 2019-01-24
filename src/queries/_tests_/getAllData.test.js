const getAllData = require("../getAllData");
const { refresh } = require("../../db/build.js");
const { events, teams } = require("./test_fixtures");

describe("getTableData returns all events", () => {
  test(`Assert that you can click the profile tab`, async done => {
    await refresh();
    expect(getAllData.getTableData("events")).resolves.toEqual(events);
    done();
  }, 30000);
});

describe("getTableData returns all teams", () => {
  test(`Assert that you can click the profile tab`, async done => {
    await refresh();
    expect(getAllData.getTableData("teams")).resolves.toEqual(teams);
    done();
  }, 30000);
});
