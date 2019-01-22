const dbConnection = require("../db/db_connection.js");

const postTeam = newTeam =>
  new Promise((resolve, reject) => {
    const query = `INSERT INTO teams (name, location, user_id, size, genders, ages, skill, sport, solo, bio, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`;
    const values = [
      newTeam.name,
      newTeam.location,
      "5",
      newTeam.size,
      newTeam.genders,
      newTeam.ages,
      newTeam.skill,
      newTeam.sport,
      newTeam.solo,
      newTeam.bio,
      newTeam.teamImage
    ];
    dbConnection.query(query, values, (err, res) => {
      if (err) reject(err);
      else resolve(res.rows);
    });
  });

module.exports = { postTeam };
