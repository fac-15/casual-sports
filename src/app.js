const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const helpers = require("./views/helpers/index");
const postEventData = require("./queries/postEventData");

const routes = require("./routes/index.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
    defaultLayout: "main",
    helpers
  })
);

app.post("/search", (req, res) => {
  const table = req.body.table;
  const searchInput = req.body.sport;
  res.redirect(`../search/${table}/${searchInput}`);
});

app.post("/add-event", (req, res) => {
  const newEvent = req.body;
  postEventData.postEvent(newEvent);
  res.redirect(`/`);
});

app.use(routes);
app.set("port", process.env.PORT || 2500);

module.exports = app;
