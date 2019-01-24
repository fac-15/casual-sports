const removeTags = str => {
  if (str === undefined || str === "") {
    return "Bio unavailable";
  }
  const cleanString = str.replace(/<\/?[^>]+(>|$)/g, "");
  if (cleanString.length > 140) {
    return cleanString.substring(0, 90) + "...";
  }
  return cleanString;
};

module.exports = removeTags;
