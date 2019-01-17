const dbConnection = require('../db/db_connection.js');


const getOneEvent = id => {
    return new Promise((resolve, reject) => {
      dbConnection.query(`SELECT * FROM events WHERE id = '${id}'`, (err, res) => {
        if (err) reject(err);
          else resolve(res.rows); 
      });
    });
  }

  module.exports = getOneEvent;