// key func

// skill level

// gender one
const numToString = (num) => {
  let gender;
  if(num === 1){
    gender = "Mixed";
  } else if (num == 2){
    gender = "All-Male";
  } else if (num == 3){
    gender = "All-Female";
  } else {
    gender = "Other";
  }
  return gender;
}

module.exports = numToString;
