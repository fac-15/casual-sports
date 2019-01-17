const dbConnection = require("../db/db_connection.js");

const getTableData = tableName => {
  return new Promise((resolve, reject) => {
    dbConnection.query(`SELECT * FROM ${tableName}`, (err, res) => {
      if (err) reject(err);
      else resolve(res.rows);
    });
  });
};

const searchSport = (table, sports) => {
    return new Promise((resolve, reject) => {
      dbConnection.query(`SELECT * FROM ${table} WHERE sport = '${sports}'`, (err, res) => {
        if (err) reject(err);
          else if (res.rows.length === 0) resolve('no results')
          else resolve(res.rows);
      });
    });
  }

module.exports = {
  getTableData
  , searchSport
};
