const getOneTeam = require("../getOneTeam");
const dbBuild = require("../../db/db_build.js");

const team1 = {
  ages: 1,
  genders: 3,
  id: 1,
  location: "london",
  name: "fac",
  size: 1,
  skill: 3,
  solo: true,
  sport: "football",
  user_id: 1
};

test("Testing results for team id 1", () => {
  dbBuild((error, response) => {
    if (error) console.log("ERROR IN DBBUILD: " + error);
    return expect(getOneTeam(1)).resolves.toEqual(team1);
  });
});

test("Testing properties for team id 1", () => {
  dbBuild((error, response) => {
    if (error) console.log("ERROR IN DBBUILD: " + error);
    return expect(getOneTeam(1)).resolves.toHaveProperty("id");
  });
});

// test("Testing invalid input returns false", () => {
//   dbBuild((error, response) => {
//     if (error) console.log("ERROR IN DBBUILD: " + error);
//     return getOneTeam("sdfkgjndfkjg").catch(e =>
//       expect(e).toEqual(
//         `error: invalid input syntax for integer: "sdfkgjndfkjg"`
//       )
//     );
//   });
// });
