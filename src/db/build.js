const fs = require("fs");
const dbConnection = require("./db_connection");
const data = fs.readFileSync(`${__dirname}/data.sql`).toString();
const drop = fs.readFileSync(`${__dirname}/drop.sql`).toString();
const empty = fs.readFileSync(`${__dirname}/empty.sql`).toString();
const schema = fs.readFileSync(`${__dirname}/schema.sql`).toString();

// using cb to db
// const dbBuilder = cb => dbConnection.query(sql, cb);

const promiseDropDb = () => new Promise((resolve, reject) => {
    dbConnection.query(drop, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });

  const promiseSchemaDb = () => new Promise((resolve, reject) => {
      dbConnection.query(schema, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });

    const promiseDataDb = () => new Promise((resolve, reject) => {
        dbConnection.query(data, (err, res) => {
          if (err) reject(err);
          else resolve(res);
        });
      });

      const promiseEmptyDb = () => new Promise((resolve, reject) => {
          dbConnection.query(empty, (err, res) => {
            if (err) reject(err);
            else resolve(res);
          });
        });

promiseDropDb().then(promiseSchemaDb().then(promiseDataDb()));

// const refresh = async () => {
//   // promiseDropDb().then(promiseSchemaDb().then(promiseDataDb()));
//
// };

//Old db_build
const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

const dbBuilder = cb => dbConnection.query(sql, cb);

dbBuilder();

module.exports = {promiseDropDb, promiseSchemaDb, promiseDataDb, promiseEmptyDb, dbBuilder}
