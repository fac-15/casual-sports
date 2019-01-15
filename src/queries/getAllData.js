const dbConnection = require('../db/db_connection.js');

const getAllData = () => {
    return new Promise((resolve, reject) => {
        dbConnection.query(`SELECT * FROM events`, (err, res) => {
          if (err) reject(err);
          else resolve(res.rows);
        });
      });
    }

module.exports = getAllData;