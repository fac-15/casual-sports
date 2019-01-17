const dbConnection = require('../db/db_connection.js');


const searchSport = sports => {
    return new Promise((resolve, reject) => {
      dbConnection.query(`SELECT * FROM events WHERE sport = '${sport}'`, (err, res) => {
        if (err) reject(err);
          else resolve(res.rows);
      });
    });
  }

  module.exports = getOneEvent;
