
const yesOrNo = (value) => {
  let str;
  if (value === true) {
    str = "Yes";
  } else {
    str = "No";
  }
  return str;
}

module.exports = yesOrNo;
