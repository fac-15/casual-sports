const databaseConnection = require('../db/db_connection');
const hashPassword = require('/hash.js');


const postDataUser = (name, password, cb) => {
    hashPassword(password, (err, hashedPassword) => {
        if (err) console.log(err);
        databaseConnection.query(
            'INSERT INTO users (name, password) VALUES ($1, $2)',
            [name, hashedPassword],
            (error, res) => {
                if(err) {
                    return cb(error);
                } else {
                    cb(null, res);
                }
            }
        );
    });       
}

module.exports = postDataUser;