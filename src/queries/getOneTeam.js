const dbConnection = require('../db/db_connection.js');


const getOneTeam = id => {
    return new Promise((resolve, reject) => {
      dbConnection.query(`SELECT * FROM teams WHERE id = '${id}'`, (err, res) => {
        if (err) reject(err);
        else resolve(res.rows);
      });
    });
  }

  module.exports = getOneTeam;