const supertest = require("supertest");
const app = require("../../app.js");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// const team2name = "Otcom";
// const team3name = "Sub-Ex";

// const event10name = "Bitchip";
// const event21name = "Bamity";

describe("Check that router GET calls return the appropriate status codes", () => {
  test("GET to home should return status 200", done => {
    expect.assertions(1);
    supertest(app)
      .get("/")
      .then(res => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
  // test("GET to anaconda should return status 404", () =>
  //   supertest(app)
  //     .get("/anaconda")
  //     .then(res => {
  //       expect(res.statusCode).toBe(404);
  //     }));
  // test("GET to /search/teams/football should return status 200", () =>
  //   supertest(app)
  //     .get("/search/teams/football")
  //     .then(res => {
  //       expect(res.statusCode).toBe(200);
  //     }));
  // test("GET to /search/events/chess should return status 200", () =>
  //   supertest(app)
  //     .get("/search/events/chess")
  //     .then(res => {
  //       expect(res.statusCode).toBe(200);
  //     }));
  // test("GET to /search-open/events/rugby should return status 200", () =>
  //   supertest(app)
  //     .get("/search-open/events/rugby")
  //     .then(res => {
  //       expect(res.statusCode).toBe(200);
  //     }));
  // test("GET to /add-event should return status 200", () =>
  //   supertest(app)
  //     .get("/add-event")
  //     .then(res => {
  //       expect(res.statusCode).toBe(200);
  //     }));
  // test("GET to /add-team should return status 200", () =>
  //   supertest(app)
  //     .get("/add-team")
  //     .then(res => {
  //       expect(res.statusCode).toBe(200);
  //     }));
});

// describe("Check that making a GET request to a specific team id returns the correct team", () => {
//   test("GET to teams/2 should return team Otcom", () =>
//     supertest(app)
//       .get("/teams/2")
//       .then(res => {
//         expect(res.text.includes(team2name)).toBe(true);
//       }));
//   test("GET to teams/2 should not return team Sub-Ex", () =>
//     supertest(app)
//       .get("/teams/2")
//       .then(res => {
//         expect(res.text.includes(team3name)).toBe(false);
//       }));
// });

// describe("Check that making a GET request to a specific event id returns the correct team", () => {
//   test("GET to events/10 should return team ", () =>
//     supertest(app)
//       .get("/events/10")
//       .then(res => {
//         expect(res.text.includes(event10name)).toBe(true);
//       }));
//   test("GET to events/2 should not return team Bamity", () =>
//     supertest(app)
//       .get("/events/10")
//       .then(res => {
//         expect(res.text.includes(event21name)).toBe(false);
//       }));
// });

// describe("Check POST request status codes", () => {
//   test("POST to /search returns 302 status code", () =>
//     supertest(app)
//       .post("/search")
//       .then(res => {
//         expect(res.statusCode).toBe(302);
//       }));
//   test("POST to /add-event returns 302 status code", () =>
//     supertest(app)
//       .post("/add-event")
//       .send({
//         name: "Blub blub event",
//         sport: "football",
//         event_date: "2018-12-22",
//         start_time: "18:00",
//         location: "London",
//         open: true
//       })
//       .then(res => {
//         expect(res.statusCode).toBe(302);
//       }));
//   test("POST to /add-team returns 302 status code", () =>
//     supertest(app)
//       .post("/add-team")
//       .send({ name: "Blub blub team", solo: true })
//       .then(res => {
//         expect(res.statusCode).toBe(302);
//       }));
// });
