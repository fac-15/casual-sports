const fs = require("fs");
const dbConnection = require("./db_connection");
const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

const dbBuilder = cb => dbConnection.query(sql, cb);

//uncomment to run in command line db_build.js
// dbBuilder();

module.exports = dbBuilder;
