const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const helpers = require("./views/helpers/index");


// const helpers = require("./views/helpers/index.js");
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
    helpers: helpers
  })
);

app.post("/search",(req, res) => {
  const searchInput = req.body.sport
  res.redirect(`../search/${searchInput}`)
  })

app.use(routes);
app.set("port", process.env.PORT || 2500);

module.exports = app;
