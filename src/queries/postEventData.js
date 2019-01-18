const dbConnection = require("../db/db_connection.js");

const postEvent = newEvent => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO events (name, sport, event_date, start_time, users_id, location, genders, open) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
    const values = [
      newEvent.name,
      newEvent.sport,
      newEvent.event_date,
      newEvent.start_time,
      "5",
      newEvent.location,
      newEvent.genders,
      newEvent.open
    ];
    dbConnection.query(query, values, (err, res) => {
      if (err) reject(err);
      else resolve(res.rows);
    });
  });
};

module.exports = { postEvent };
