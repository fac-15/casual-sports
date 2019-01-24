const reverseDate = str =>
  str
    .split("-")
    .reverse()
    .join("-");

module.exports = reverseDate;
