const getAllData = require("../getAllData");
const { refresh } = require("../../db/build.js");
const { events, teams, football, cricket } = require("./test_fixtures");

// describe("testing getTableData", () => {
//   test(`getTableData returns all events`, async done => {
//     await refresh();
//     expect(getAllData.getTableData("events")).resolves.toEqual(events);
//     done();
//   }, 30000);
// });
//
// describe("getTableData returns all teams", () => {
//   test(`getTableData returns all events`, async done => {
//     await refresh();
//     expect(getAllData.getTableData("teams")).resolves.toEqual(teams);
//     done();
//   }, 30000);
//
describe("getAllData function", () => {
  test(`getTableData returns all events`, async () => {
    await refresh();
    await expect(getAllData.getTableData("events")).resolves.toEqual(events);
    await expect(getAllData.getTableData("teams")).resolves.toEqual(teams);
    await expect(getAllData.getTableData("tea")).rejects.toThrow(
      "does not exist"
    );
  });
});

describe("searchSport function", () => {
  test(`searchSport returns correct results`, async () => {
    await refresh();
    await expect(getAllData.searchSport("events", "football")).resolves.toEqual(
      football
    );
    // await expect(getAllData.searchSport("events", "cricket")).reject.toThrow(
    //   err
    // );
    await expect(getAllData.searchSport("tea", "football")).rejects.toThrow(
      "does not exist"
    );
  });
});
