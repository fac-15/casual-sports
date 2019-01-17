const express = require("express");
const router = express.Router();
// const helpers = require('../views/helpers/index.js');
// const reset = require('../database/build_test.js');
const getAllData = require("../queries/getAllData");
const getOneTeam = require("../queries/getOneTeam");
const getOneEvent = require("../queries/getOneEvent");

router.get("/", (request, response) => {
  response.render("home");
});

router.get("/search/:table/:sport", (request, response) => {
  const searchInput = request.params.sport;
  const table = request.params.table;
  getAllData
    .searchSport(table, searchInput)
    .then(result => {
      if (table === events) {
      response.render("search", { sportsData: result });}
      else {
        response.render("search", { teamData: result });}
      }
    })
    .catch(err => {
      response.status(err, 500);
    });
});

router.get("/events", (request, response) => {
  getAllData
    .getTableData("events")
    .then(result => {
      response.render("events", { eventsData: result });
    })
    .catch(err => {
      response.status(err, 500);
    });
});

router.get("/teams", (request, response) => {
  getAllData
    .getTableData("teams")
    .then(result => {
      response.render("teams", { teamsData: result });
    })
    .catch(err => {
      response.status(err, 500);
    });
});

router.get("/events/:id", (req, res) => {
  getOneEvent(req.params.id)
    .then(result => {
      let rest = result[0];
      res.render("event-info", { eventInfo: rest });
    })
    .catch(err => {
      res.status(err, 500);
    });
});

router.get("/teams/:id", (req, res) => {
  getOneTeam(req.params.id)
    .then(result => {
      let rest = result[0];
      res.render("team-info", { teamInfo: rest });
    })
    .catch(err => {
      res.status(err, 500);
    });
});

router.get("/new-event", (req, res) => {
  res.render("new-event", { eventInfo: "this" });
});

router.get("/sign-up", (req, res) => {
  res.render("sign-up");
});

router.get("/add-event", (req, res) => {
  res.render("add-event");
});

router.get("/add-team", (req, res) => {
  res.render("add-team");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
