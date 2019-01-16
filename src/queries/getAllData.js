const dbConnection = require('../db/db_connection.js');

const getEventData = () => {
    return new Promise((resolve, reject) => {
        dbConnection.query(`SELECT * FROM events`, (err, res) => {
          if (err) reject(err);
          else resolve(res.rows);
        });
      });
    }


    const getAllTeams = () => {
      return new Promise((resolve, reject) => {
          dbConnection.query(`SELECT * FROM teams`, (err, res) => {
            if (err) reject(`${err}`);
            else resolve(res.rows);
          });
        });
      }
  
      

module.exports = {
  getEventData,
  getAllTeams 
};