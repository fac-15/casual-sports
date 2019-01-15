const express = require('express');
const router = express.Router();
// const helpers = require('../views/helpers/index.js');
// const reset = require('../database/build_test.js');
const getAllData = require('../queries/getAllData')


router.get("/", (request, response) => {

  getAllData()
  .then((result) => {
  response.render("home", {eventData: result})
  })
  .catch((err)=> {
    response.status(err, 500);
   })
})

router.get("/sign-up", (req, res) => {
  res.render("sign-up");
});

router.get("/login", (req, res) => {
    res.render("login"); 
  });


module.exports = router;
