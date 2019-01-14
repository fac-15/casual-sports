const express = require('express');
const router = express.Router();
// const helpers = require('../views/helpers/index.js');
// const reset = require('../database/build_test.js');

router.get("/", (request, response) => {
  response.render("home");
})

router.get("/sign-up", (req, res) => {
  res.render("sign-up");
});

router.get("/login", (req, res) => {
    res.render("login"); 
  });


module.exports = router;
