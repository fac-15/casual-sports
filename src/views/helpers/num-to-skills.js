
const skillz = (num) => {
  let skillz;
  if (num === 1) {
    skillz = "Super casual"
  } else if (num === 2) {
    skillz = "Reasonably fit"
  } else {
    skillz = "Quite competitive"
  }
  return skillz;
}

module.exports = skillz;
