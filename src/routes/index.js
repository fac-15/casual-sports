const express = require("express");
const router = express.Router();
// const helpers = require('../views/helpers/index.js');
// const reset = require('../database/build_test.js');
const getAllData = require("../queries/getAllData");
const getOneTeam = require("../queries/getOneTeam");

router.get("/", (request, response) => {
  getAllData
    .getTableData("events")
    .then(result => {
      response.render("home", { eventData: result });
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

router.get("/ev", (request, response) => {
  getAllData
    .getTableData("events")
    .then(result => {
      response.json(result);
    })
    .catch(err => {
      response.status(err, 500);
    });
});

router.get("/tms", (request, response) => {
  getAllData
    .getTableData("teams")
    .then(result => {
      response.json(result);
    })
    .catch(err => {
      response.status(err, 500);
    });
});

router.get("/events/:id", (req, res) => {
  res.render("events");
});

router.get("/teams/:id", (req, res) => {
  res.render("teams");
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
