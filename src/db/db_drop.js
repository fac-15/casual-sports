const fs = require("fs");
const dbConnection = require("./db_connection");
const sql = fs.readFileSync(`${__dirname}/db_drop.sql`).toString();

const dbDrop = cb => dbConnection.query(sql, cb);

dbDrop();

module.exports = dbDrop;
