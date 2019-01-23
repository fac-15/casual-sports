const dateFormat = require("dateformat");
const numToDate = num => {
  const date = new Date(num);
  return dateFormat(date, "dddd, mmmm dS, yyyy, h:MM TT");
};

module.exports = numToDate;
