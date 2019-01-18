const yesOrNo = value => {
  let str;
  if (value === true) str = "Yes";
  else if (value === false) str = "No";
  else str = "Invalid input";
  return str;
};

module.exports = yesOrNo;
