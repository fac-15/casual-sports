const dbConnection = require("../db/db_connection.js");

const getUniqueSports = () =>
  new Promise((resolve, reject) => {
    dbConnection.query(`SELECT DISTINCT sport FROM events`, (err, res) => {
      if (err) reject(err);
      else {
        resolve(res.rows);
      }
    });
  });

module.exports = getUniqueSports;
