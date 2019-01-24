const dbConnection = require("../db/db_connection.js");

const getOneUser = username =>
  new Promise((resolve, reject) => {
    dbConnection.query(
      `SELECT * FROM users WHERE username = '${username}'`,
      (err, res) => {
        if (err) reject(err);
        else resolve(res.rows);
      }
    );
  });

module.exports = getOneUser;
