const getAllData = require("../getAllData");
const refresh = require("../../db/build.js");
const { events, teams } = require("./test_fixtures");

test("the function returns all of the event data", () => 
expect(getAllData.getTableData("events")).resolves.toEqual(events)
);

test("the function returns all of the team data", () => 
expect(getAllData.getTableData("teams")).resolves.toEqual(teams)
);

test("the function fails with an error", () => 
   expect(getAllData.getTableData("err")).toBe.rejected
);


  test("the function fails with an error", () => 
   expect(getAllData.searchSport("err")).toBe.rejected
  );