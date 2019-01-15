const bcrypt = require("bcryptjs");

const hashPassword = (password) => {
  return new Promise ((resolve, reject) => { 
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        reject(err);
      } else {
        resolve(bcrypt.hash(password, salt));
        }
      })
    });
  };


  module.exports = hashPassword;