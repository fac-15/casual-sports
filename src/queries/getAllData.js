const dbConnection = require("../db/db_connection.js");

const getTableData = tableName => {
  return new Promise((resolve, reject) => {
    dbConnection.query(`SELECT * FROM ${tableName}`, (err, res) => {
      if (err) reject(err);
      else resolve(res.rows);
    });
  });
};

module.exports = {
  getTableData
};
