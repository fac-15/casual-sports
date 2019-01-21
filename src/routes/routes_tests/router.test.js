const supertest = require("supertest");
const app = require("../../app.js");

const team2name = "Otcom";
const team3name = "Sub-Ex";


test("SERVER TEST TIME", () => {
  expect(1).toBe(1);
});

describe("Check that router calls return the appropriate status codes", () => {
  test("GET to home should return status 200", () => supertest(app).get("/").then((res) => {
      expect(res.statusCode).toBe(200)
    })
  )
  test("GET to anaconda should return status 404", () => supertest(app).get("/anaconda").then((res) => {
      expect(res.statusCode).toBe(404)
    })
  )
});

describe("Check that making a GET request to a specific team id returns the correct team", () => {
  test("GET to teams/2 should return team Otcom", () => supertest(app).get("/teams/2").then((res) => {
      expect(res.text.includes(team2name)).toBe(true);
    })
  )
  test("GET to teams/2 should not return team Sub-Ex", () => supertest(app).get("/teams/2").then((res) => {
      expect(res.text.includes(team3name)).toBe(false);
    })
  )
});
