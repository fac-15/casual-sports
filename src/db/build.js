const fs = require("fs");
const dbConnection = require("./db_connection");
const data = fs.readFileSync(`${__dirname}/data.sql`).toString();
const drop = fs.readFileSync(`${__dirname}/drop.sql`).toString();
const empty = fs.readFileSync(`${__dirname}/empty.sql`).toString();
const schema = fs.readFileSync(`${__dirname}/schema.sql`).toString();

const promiseDropDb = () =>
  new Promise((resolve, reject) => {
    dbConnection.query(drop, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });

const promiseSchemaDb = () =>
  new Promise((resolve, reject) => {
    dbConnection.query(schema, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });

const promiseDataDb = () =>
  new Promise((resolve, reject) => {
    dbConnection.query(data, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });

const promiseEmptyDb = () =>
  new Promise((resolve, reject) => {
    dbConnection.query(empty, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });

const refresh = async () => {
  try {
    await promiseDropDb();
    await promiseSchemaDb();
    await promiseDataDb();
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  promiseDropDb,
  promiseSchemaDb,
  promiseDataDb,
  promiseEmptyDb,
  refresh
};
