const databaseConnection = require("../db/db_connection");
const bcrypt = require("bcryptjs");


const hashPassword = (password, cb) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      callback(err);
    } else {
      bcrypt.hash(password, salt, cb);
    }
  });
};


const postDataUser = (team, username, password, email, cb) => {
  hashPassword(password, (err, hashedPassword) => {
      if (err) console.log(err);
      databaseConnection.query(
          'INSERT INTO users (team, username, password, email) VALUES ($1, $2, $3, $4)',
          [team, username, hashedPassword, email],
          (error, res) => {
              if(err) cb(error);
               else cb(null, res);
              }
            )
        });
    };       


module.exports = {
  postDataUser,
  hashPassword
};

