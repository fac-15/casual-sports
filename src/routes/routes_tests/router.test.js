const supertest = require("supertest");
const app = require("../../app.js");

test("SERVER TEST TIME", () => {
  expect(1).toBe(1);
});

test("GET to home should return status 200", () => {
  return supertest(app).get("/").then((res) => {
    expect(res.statusCode).toBe(200);
  })
});
