const removeTags = str => {
  const cleanString = str.replace(/<\/?[^>]+(>|$)/g, "");
  if (cleanString.length > 140) {
    return cleanString.substring(0, 90) + "...";
  } return cleanString;
};

module.exports = removeTags;
