const getAllData = require("../getAllData");
const { refresh } = require("../../db/build.js");
const { events, teams } = require("./test_fixtures");

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
// });
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
