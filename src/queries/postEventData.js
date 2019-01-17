const dbConnection = require("../db/db_connection.js");

const postEvent = newEvent =>
  new Promise((resolve, reject) => {
    const query = `INSERT INTO events (name, sport, users_id, location, genders, open) VALUES ($1, $2, $3, $4, $5, $6)`;
    const values = [
      newEvent.name,
      newEvent.sport,
      "5",
      newEvent.location,
      newEvent.gender,
      newEvent.open
    ];
    dbConnection.query(query, values, (err, res) => {
      if (err) reject(err);
      else resolve(res.rows);
    });
  });

module.exports = { postEvent };
