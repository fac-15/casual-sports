
const numToString = (num) => {
  let gender;
  if(num === 1){
    gender = "Mixed";
  } else if (num == 2){
    gender = "All-Male";
  } else if (num == 3){
    gender = "All-Female";
  } else if (num === 4) {
    gender = "Other";
  } else {
    gender = "Invalid input";
  }
  return gender;
}

module.exports = numToString;
