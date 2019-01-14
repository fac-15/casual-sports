const express = require('express');
const router = express.Router();
// const helpers = require('../views/helpers/index.js');
// const reset = require('../database/build_test.js');

router.get("/", (request, response) => {
  response.send("hello it's me");
})

module.exports = router;
