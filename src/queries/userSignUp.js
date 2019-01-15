const databaseConnection = require('../db/db_connection');
const hashPassword = require('/hash.js');


const postDataUser = (username, password, email) => {
   
   return new Promise ((resolve, reject) => {
    hashPassword(password, (err, hashedPassword) => {
        if (err) console.log(err);
        databaseConnection.query(
            'INSERT INTO users (username, password, email) VALUES ($1, $2, $3)',
            [username, hashedPassword, email],
            (err, res) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(res.rows);
                    }
                })
            }
        );
    });       
}

module.exports = postDataUser;