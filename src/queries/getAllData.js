const dbConnection = require("../db/db_connection.js");

const getTableData = tableName =>
  new Promise((resolve, reject) => {
    dbConnection.query(`SELECT * FROM ${tableName}`, (err, res) => {
      if (err) reject(err);
      else resolve(res.rows);
    });
  });

const searchSport = (table, sports) =>
  new Promise((resolve, reject) => {
    dbConnection.query(
      `SELECT * FROM ${table} WHERE sport = '${sports}'`,
      (err, res) => {
        if (err) {
          console.log("IM HERE IN THE ERROR");
          reject(err);
        } else if (res.rows.length === 0) {
          console.log("IM IN THE ELSE IF");
          reject(err);
        } else {
          console.log("IM GOING INTO THE RESOLVE");
          resolve(res.rows.reverse());
        }
      }
    );
  });

module.exports = {
  getTableData,
  searchSport
};
