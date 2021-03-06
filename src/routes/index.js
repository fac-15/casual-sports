const express = require("express");
const router = express.Router();
const getAllData = require("../queries/getAllData");
const getOneTeam = require("../queries/getOneTeam");
const getOneEvent = require("../queries/getOneEvent");
const postEventData = require("../queries/postEventData");
const postTeamData = require("../queries/postTeamData");
const { sign, verify } = require("jsonwebtoken");
const postUser = require("../queries/userSignUp");
const getMeetupApi = require("../queries/getMeeupApi");
const getUniqueSports = require("../queries/getUniqueSports");
const cookieParser = require("cookie-parser");

router.post("/search", (req, res) => {
  const table = req.body.table;
  const searchInput = req.body.sport;
  res.redirect(`/search/${table}/${searchInput}`);
});

router.post("/add-event", (req, res) => {
  const newEvent = req.body;
  postEventData.postEvent(newEvent);
  res.redirect(`/`);
});

router.post("/add-team", (req, res) => {
  const newTeam = req.body;
  postTeamData.postTeam(newTeam);
  res.redirect(`/`);
});

router.get("/", (request, response) => {
  getUniqueSports()
    .then(result => {
      result.forEach(row => row.sport.toString());
      response.status(200).render("home", { sports: result });
    })
    .catch(err => {
      response.status(200).render("home");
    });
});

router.get("/map", (request, response) => {
  getAllData
    .getTableData("events")
    .then(result => {
      response.render("map", { eventsData: JSON.stringify(result.reverse()) });
    })
    .catch(err => {
      response.status(500).render("500");
    });
});

router.get("/search-open/:table/:sport", (request, response) => {
  const searchInput = request.params.sport;
  const table = request.params.table;
  getAllData
    .searchSport(table, searchInput)
    .then(result => {
      response.render("search-open", { sportsData: result });
    })
    .catch(err => {
      response.status(302).render("no-results");
    });
});

router.get("/search/:table/:sport", (request, response) => {
  const searchInput = request.params.sport;
  const table = request.params.table;
  getAllData
    .searchSport(table, searchInput)
    .then(result => {
      response.render("search", {
        sportsData: result,
        table,
        sport: searchInput
      });
    })
    .catch(err => {
      response.status(404).render("no-results");
    });
});

router.get("/meetup", (request, response) => {
  getMeetupApi()
    .then(result => {
      response.render("meetup", { meetupData: result });
    })
    .catch(err => {
      response.status(500).render("500");
    });
});

router.get("/events", (request, response) => {
  getAllData
    .getTableData("events")
    .then(result => {
      response.render("events", { eventsData: result });
    })
    .catch(err => {
      response.status(500).render("500");
    });
});

router.post("/events/date", (request, response) => {
  getAllData
    .getTableData("events")
    .then(result => {
      result.sort((a, b) => {
        const keyA = new Date(a.event_date),
          keyB = new Date(b.event_date);
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
      response.render("events", { eventsData: result });
    })
    .catch(err => {
      response.status(500).render("500");
    });
});

router.post("/events/alpha/", (request, response) => {
  getAllData
    .getTableData("events")
    .then(result => {
      result.sort((a, b) => {
        const textA = a.name.toUpperCase();
        const textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      response.render("events", { eventsData: result });
    })
    .catch(err => {
      response.status(500).render("500");
    });
});

router.get("/teams", (request, response) => {
  getAllData
    .getTableData("teams")
    .then(result => {
      response.render("teams", { teamsData: result });
    })
    .catch(err => {
      response.status(500).render("500");
    });
});

router.post("/teams/alpha/", (request, response) => {
  getAllData
    .getTableData("teams")
    .then(result => {
      result.sort((a, b) => {
        const textA = a.name.toUpperCase();
        const textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      response.render("teams", { teamsData: result });
    })
    .catch(err => {
      response.status(500).render("500");
    });
});

router.get("/events/:id", (req, res) => {
  getOneEvent(req.params.id)
    .then(result => {
      const rest = result[0];
      res.render("event-info", { eventInfo: rest });
    })
    .catch(err => {
      res.status(500).render("500");
    });
});

router.get("/teams/:id", (req, res) => {
  getOneTeam(req.params.id)
    .then(result => {
      const rest = result[0];
      res.render("team-info", { teamData: rest });
    })
    .catch(err => {
      res.status(404).render("404");
    });
});

router.get("/new-event", (req, res) => {
  res.render("new-event", { eventInfo: "this" });
});

router.get("/sign-up", (req, res) => {
  res.render("sign-up");
});

router.post("/sign-up", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const team = req.body.team;
  postUser.postDataUser(team, username, password, email, (err, result) => {
    if (err) console.log(err);
    else res.redirect("/login");
  });
});

router.get("/add-event", (req, res) => {
  if (req.cookies.cookie) {
    res.render("add-event");
  } else {
    res.redirect("/login");
  }
});

router.get("/add-team", (req, res) => {
  if (req.cookies.cookie) {
    res.render("add-team");
  } else {
    res.redirect("/login");
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  res.clearCookie("cookie");
  res.redirect("/");
});

router.get("/*", (req, res) => {
  res.status(404).render("404");
});

module.exports = router;
