const numToAge = (num) => {
  let ageRange;
  if (num === 1) {
    ageRange = "18-21";
  } else if (num === 2) {
    ageRange = "22-40";
  } else if (num === 3) {
    ageRange = "41-65";
  } else {
    ageRange = "66 and over";
  }
  return ageRange;
}

module.exports = numToAge;
