const dbConnection = require('../db/db_connection.js');

const getAllTeamData = teams => {
    return new Promise((resolve, reject) => {
        dbConnection.query(`SELECT * FROM teams`, (err, res) => {
          if (err) reject(err);
          else resolve(res.rows);
        });
      });
    }

module.exports = getAllTeamData;