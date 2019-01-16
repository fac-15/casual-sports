const dbConnection = require('../db/db_connection.js');


const getOneEvent = id => {
    return new Promise((resolve, reject) => {
      dbConnection.query(`SELECT * FROM events WHERE id = '${id}'`, (err, res) => {
        if (err) reject(`${err}`);
          else resolve(res.rows); 
      });
    });
  }


  // getOneEvent("potatoes")
  // .then((result) => {
  //   console.log("this is the result", result)
  // })
  // .catch((err)=> {
  //   console.log(err, 500);
  //  })


  module.exports = getOneEvent;