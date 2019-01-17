
const skillz = (num) => {
  let skillz;
  if (num === 1) {
    skillz = "Super casual";
  } else if (num === 2) {
    skillz = "Reasonably fit";
  } else if (num ===3) {
    skillz = "Quite competitive";
  } else {
    skillz = "Invalid input";
  }
  return skillz;
}

module.exports = skillz;
