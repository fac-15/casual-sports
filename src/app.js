const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const helpers = require("./views/helpers/index");
const postEventData = require("./queries/postEventData");
const getOneUser = require("./queries/getOneUser");
const postTeamData = require("./queries/postTeamData");
const cookieParser = require('cookie-parser');
const bcrypt = require("bcryptjs");
const { sign, verify } = require('jsonwebtoken');
const secret = process.env.SECRET;

const routes = require("./routes/index.js");

const app = express();
app.use(cookieParser());


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

  app.post("/login", (req, res) => {
    const username = req.body.username;
    const enteredPassword = req.body.password; 
  
    getOneUser(username) 
      .then((result) => {
        bcrypt.compare(enteredPassword, result[0].password, (err, response) => {
          if (response) {
            const person = sign(result[0].id, secret);
            const token = `jwt=${person}: HttpOnly`;
            res.status(200).cookie('cookie', token).redirect("/add-event");
          } else {
            console.log("try again sugarplum")
            res.redirect("/login");
          }
        })
      })    
      .catch(err => {
        console.log("promise error", err);
      })
    });
    

app.use(routes);
app.set("port", process.env.PORT || 2500);

module.exports = app;
