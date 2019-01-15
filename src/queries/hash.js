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


  module.exports = hashPassword;